## Technologies

* NodeJS
* Express Framework
* MongoDB
* Mongoose
* Template engine: Pug
* PostMan


## Structure

```
├── public
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── favicon.ico
│   └── scrits
│       └── script.js
│
├── src
│   ├── config
│   │   ├── database.js
│   │   
│   │
│   ├── controllers
│   │   └── UserController.js
│   │
│   |
│   │
│   ├── model
│   │   └── User.js
│   │
│   ├── router
│   │   └── userRoutes.js
│   │
│   |
│   │
│   └── index.js
│
|── .gitignore
|
|
|── package.json
|
└── README.md
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/config**           | Application configuration including environment-specific configs 
| **src/controller**       | Controllers define functions to serve various express routes. 
| **src/router**           | Contain all express routes, separated by module/area of application                       
| **src/model**            | Models define schemas that will be used in storing and retrieving data from Application database  |
| **index.js**             | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |     


# Getting started
- Clone The Repository
```
git clone  <git lab_template_url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
 Navigate to `http://localhost:{port}`
