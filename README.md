# **Toolbox OTT FullStack challenge Documentation**

This project is a solution proposed for the challenge **[v3] Full Stack JS - Code Challenge**

Author: Giovanny Manchola - hgmancholam@gmail.com

---

# Table of Contents

- [**Toolbox OTT FullStack challenge Documentation**](#toolbox-ott-fullstack-challenge-documentation)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [**API Project**](#api-project)
- [**Frond-end Project**](#frond-end-project)
  - [Requirements](#requirements)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)

<div id='Introduction' >

---

# Introduction

This project is a solution proposed for the challenge **[v3] Full Stack JS - Code Challenge**.

It is composed by **two** differens projects:

1. techstack-api: A project with an API using **NodeJs** and **ExpressJs** which serve all information in three end points.
   1. **/files/data:** Return a JSON object with formatted data from all files.
   2. **/files/getfile?fileName=<filename>** Return a JSON object with formatted data from just one file received as parameter in fileName.
   3. **/files/listfiles** This endpoint returns a JSON object with all filenames of files availables in this service.

> Please, keep in mind that this service is an middle layer from an external API provider by Toolbox.

1. techstack-frontend: A project with front end in **ReactJs** and **React Boostrap**. This project have three basic functions:
   1. List all available files in this service.
   2. Get formatted contend from each file when it is picked.
   3. gett all formatted data from files.
   </div>
   <br/>

---

<div id='API' >

# **API Project**

</div>

---

<div id='Frond-end' >

# **Frond-end Project**

This project contains all front entd for this solution using in **ReactJs** and **React Boostrap**.

This project have three basic functions:

1.  List all available files in this service.
2.  Get formatted contend from each file when it is picked.
3.  gett all formatted data from files.

<br/>
<div id='fe-requirements' >

## Requirements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. NODE: Version 20.4.0 
    ### Install with this command line:
    ```
    npm install react-bootstrap bootstrap
   ```
 
2. React Bootstrap: 
    ### Your need to install. You can use this command line:
    ```
    npm install react-bootstrap bootstrap
    ```
3. React router dom
    ###  install with this command line:
    ```
    npm install react-router-dom 
    ```   

<br/>
___
<div id='fe-availablescripts' >

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

<span style="color:#FF2020"> **Note: this is a one-way operation. Once you `eject`, you can't go back!** </span>

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
