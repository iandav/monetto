# Backend Documentation

## Endpoints

|Method|Endpoint|Body|
|------|--------|--------|
|POST|/api/auth/signup|{"nick": str, "email": str, "password": str}|
|POST|/api/auth/signin|{"nick": str, "password": str}|
|POST|/api/auth/signout||
|POST|/api/user/update/email|{"nick": str, "newEmail": str}|
|POST|/api/user/update/username|{"nick": str, "newNick": str}|
|POST|/api/user/update/password|{"nick": str, "newPassword": str}|
|POST|/api/user/delete/account|{"nick": str, "password" str}|