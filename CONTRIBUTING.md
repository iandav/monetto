# Contributing to Monetto
**You can view an overview document of the requirements for the application [here](https://docs.google.com/document/d/1gslsLzcZIjquAiEcln2ucH5LtYGZAMqjYLXrIa7pNEI/edit)**

We use 3 different tools to organize and contribute to the project:
- Trello (for assigning and keeping track of tasks related to the project)
- Google Docs (for documentation on this project and more)
- Git/GitHub

## Trello Setup

*You need an account to take on tasks and participate on trello, you can do so at https://trello.com*

The dashboard we use for the Monetto application can be found [here](https://trello.com/invite/b/QN5UUj43/41dfe97752cf488397bee3faae717f36/tactical-devs).

In this dashboard there are different "buckets" representing the state of the tasks inside of them, you can drag them and assign them accordingly.

|Bucket name|Purpouse|
|---|----|
|Backlog|Tasks that still hasn't been assigned to anyone and can be worked on|
|New Features|Tasks that have been selected from the Backlog to work on in the current version|
|Running Tasks|Tasks in progress, actively being worked on by someone|
|Phase 1 Testing|Tasks that are being tested for development stage|
|Phase 2 Testing|Tasks that are being tested for production stage|
|Ready|Tasks that have been tested and are ready for production|
|Done and Deployed|Tasks that have been tested and are running in Production Environment|

## Git setup
You can request access to the repository in our [discord](https://discord.gg/XPKwtr4Zrn)

Once you have access you can start contributing by cloning the repository running this command in a terminal: `git clone https://github.com/iandav/monetto`

The workflow would be (the commands can also be simplified by using a GUI for Git):
1. `git fetch origin && git pull` before starting to work on a feature, so you have the latest version of the remote.
2. `git checkout -b myFeatureName` where myFeatureName is the number/name of the specific feature you are going to work on.
3. `git add . && git commit -m "A simple yet useful comment about the changes made"` to stage the changes and commit them locally.
4. `git push origin myFeatureName` to push the changes commited in the feature branch to the remote for review.
5. `git checkout main && git pull` to return to the main branch and get the latest version fo the remote.
