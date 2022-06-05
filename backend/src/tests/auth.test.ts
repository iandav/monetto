import request from 'supertest'
import { app } from '../index'
import {db} from '../utils/database'
import bcrypt from 'bcryptjs'


describe('auth test suite', ()=>{

    afterEach(() =>{
        jest.clearAllMocks()
        jest.resetAllMocks()
    })
    
    describe('signIn test', () =>{

        it('should be called', async () =>{
            const userData = {
                "nick": "testing123",
                "password": "testing123"
            }
            db.user.findFirst = jest.fn().mockReturnValue(userData)
            bcrypt.compareSync = jest.fn().mockImplementation((x, y)=>{
                if (x == y) return true
            })
            
            await request(app)
            .post('/api/auth/signin')
            .send(userData)
            .expect('Content-Type', /json/)
            .expect(200)

            // check if findFirst was called for looking the existing user
            expect(db.user.findFirst).toBeCalled()

             // check if password validator was called
            expect(bcrypt.compareSync).toBeCalled()
        })

        it.todo('should return user values')
        it.todo('should validate user password')
    })
})