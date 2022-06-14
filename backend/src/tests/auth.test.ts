import request from 'supertest'
import { app } from '../index'
import {db} from '../utils/database'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from 'express';
import {verifySignUp} from '../middlewares/verifySignUp'


describe('auth test suite', ()=>{
    

    verifySignUp.checkDuplicateUsernameOrEmail = jest.fn().mockImplementation((req: Request, res: Response, next: NextFunction) =>{
        next()
    })

    afterEach(() =>{
        jest.clearAllMocks()
        jest.resetAllMocks()
    })
    
    describe('signIn test', () =>{
        const userData = {
            nick: "testing123",
            password: "testing123",
            email: 'testing@gmail.com',
            role: 'testrole'
        }

        const bcryptMock = jest.spyOn(bcrypt, 'compareSync')
        const jwtMock = jest.spyOn(jwt, 'sign')

        it('should be called', async () =>{
            const {nick, password} = userData
            db.user.findFirst = jest.fn().mockReturnValue(userData)
            bcryptMock.mockReturnValueOnce(true)

            await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(200)

            // check if findFirst was called for looking the existing user
            expect(db.user.findFirst).toBeCalled()

             // check if password validator was called
            expect(bcryptMock).toHaveBeenCalled()
            expect(jwtMock).toHaveBeenCalled()
        })

        it('should return user values', async () =>{
            const {nick, email, password, role} = userData
            db.user.findFirst = jest.fn().mockReturnValue({
                id: 'testid123',
                nick,
                email,
                role
            })
            bcryptMock.mockReturnValueOnce(true)
            

            const res = await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(200)

            expect(res.body).toEqual({nick, email, role})
            expect(db.user.findFirst).toHaveBeenCalled()
            expect(bcryptMock).toHaveBeenCalled()
            expect(jwtMock).toHaveBeenCalled()

        })

        it('should validate user password', async () =>{
            const {nick, password, email, role} = userData
            db.user.findFirst = jest.fn().mockReturnValue({
                nick,
                email,
                role,
                password
            })
            bcryptMock.mockImplementation((x, y) =>{
                return x==y
            })

            await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(200)

            expect(bcryptMock.mock.results[0].value).toBeTruthy()

        })

        it('should return error 400 when user is not found', async () =>{
            const {nick, password} = userData
            db.user.findFirst = jest.fn().mockReturnValue(null)

            const res = await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(400)

            expect(db.user.findFirst).toBeCalled()
            expect(res.body.message).toBe('User not found')

        })
        it('should return error 401 when user password is invalid', async() =>{
            const {nick, password, email, role} = userData
            db.user.findFirst = jest.fn().mockReturnValue({
                nick,
                email,
                role,
                password
            })

            bcryptMock.mockImplementation((x, y) =>{
                return x!=y
            })

            const res = await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(401)

            expect(bcryptMock).toBeCalled()
            expect(res.body.message).toBe('Invalid password')
        })
        it('should return error 500', async () =>{
            const {nick, password} = userData
            db.user.findFirst = jest.fn().mockImplementation(() =>{
                throw new Error('DB Error')
            })
            
            const res = await request(app)
            .post('/api/auth/signin')
            .send({nick, password})
            .expect('Content-Type', /json/)
            .expect(500)

            expect(db.user.findFirst).toBeCalled()
            expect(res.body.message).toBe('Error while signing in')
        })
    })
})