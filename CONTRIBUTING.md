# Project set up / Git & Github Workflow
You can request access to the repository in our [discord](https://discord.gg/XPKwtr4Zrn)

Once you have access you can start contributing.

## Project Setup

First, clone the repository to your machine
<br>

### Now, we need to setup the server with the database

To setup the database locally we will be using Docker, so make sure first you have it installed on your machine.

Let's install the database, run :
```bash
docker run --name monettodb -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:latest
```
Don't forget to replace password with your password

Now we are gonna install a database management tool called adminer, run :
```bash
docker run -d --name adminer --link monettodb:db -p 8080:8080 adminer
```

After installing them you'll need to start the database and adminer either from the GUI or the terminal.

If you are using the terminal, you can run :
```bash
docker start monettodb
```
```bash
docker start adminer
```

To make sure they are running, you can run : 
```bash
docker ps
```

Now let's go back to our backend setup.

First go into the `/backend` and install the dependencies :
```bash
npm i
```

Also before we continue you need to create a .env file inside the /backend with the follow variable :
```bash
DATABASE_URL="mysql://root:password@localhost:3306/monetto"
```
Don't forget to replace the password with your password.

Now, run :
```bash
npx prisma migrate dev
```
```bash
npx prisma generate
```

And the backend is ready!<br>
To start the development server just run : 
```bash
npm run start:dev
```

### Let's setup the frontend now

Move into the `/front` and install the dependencies :

```bash
npm i
```

Create a .env file with the following variable which is the port that it'll be running the frontend for the development.

```bash
PORT=4000
```

And done! You can start the frontend by running : 
```bash
npm run start
```

---
## Git & Github Workflow

Here is a reference image on how we are working on the project :

[Workflow](https://cdn.discordapp.com/attachments/962136918383018035/984923946749157447/unknown.png)

- First thing you need to do is to fork the repository.

From there clone the project to your machine, with

```bash
git clone your-forked-repository
```

Then create a new branch :
```bash
git branch your-branch-name
```
Now switch to your newly created branch : 
```bash
git checkout your-branch-name
```

Now you can start developing!

To push changes on your repository to the specific branch you are working :
```bash
git push origin your-branch-name
```

When your branch is ready, you need to open a Pull Request to the original repository. The PR should be at the `dev` branch and not on the `main` directly.