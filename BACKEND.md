# Backend Documentation

## Endpoints

### Authentication and users

|Method|Endpoint|Body|
|------|--------|--------|
|POST|/api/auth/signup|{"nick": str, "email": str, "password": str}|
|POST|/api/auth/signin|{"nick": str, "password": str}|
|POST|/api/auth/signout||
|POST|/api/user/update/email|{"nick": str, "newEmail": str}|
|POST|/api/user/update/username|{"nick": str, "newNick": str}|
|POST|/api/user/update/password|{"nick": str, "newPassword": str}|
|POST|/api/user/delete/account|{"nick": str, "password" str}|
|GET|/api/user/profile/:nick||

### User money accounts

|Method|Endpoint|Body|
|------|--------|--------|
|GET|/api/account/user/:nick||
|GET|/api/account/:id||
|POST|/api/account/:nick|{"name": str, "description": str}|
|DELETE|/api/account/:id||

### Earnings

|Method|Endpoint|Body|
|------|--------|--------|
|GET|/api/earning/:accountId||
|GET|/api/earning/user/:nick||
|POST|/api/earning|{"description": str, "date": str, "value": float, "accountId": int}|
|DELETE|/api/earning/:id||

### Spendings

|Method|Endpoint|Body|
|------|--------|--------|
|GET|/api/expense/:accountId||
|GET|/api/expense/user/:nick||
|POST|/api/expense|{"description": str, "date": str, "value": float, "accountId": int}|
|DELETE|/api/expense/:id||
