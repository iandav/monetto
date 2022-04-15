# Backend Documentation

## Endpoints

|Method|Endpoint|Body|
|------|--------|--------|
|POST|/api/auth/signup|{"nick": str, "email": str, "password": str}|
|POST|/api/auth/signin|{"nick": str, "password": str}|
|POST|/api/auth/signout||
