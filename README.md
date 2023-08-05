# **Toolbox OTT FullStack challenge Documentation**

This project is a solution proposed for the challenge **[v3] Full Stack JS - Code Challenge**

Author: Giovanny Manchola - hgmancholam@gmail.com

---

# Table of Contents

- [**Toolbox OTT FullStack challenge Documentation**](#toolbox-ott-fullstack-challenge-documentation)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [END POINTS](#end-points)
    - [http://localhost:3100/](#httplocalhost3100)
    - [http://localhost:3100/files/data](#httplocalhost3100filesdata)
    - [http://localhost:3100/files/listfiles](#httplocalhost3100fileslistfiles)
    - [http://localhost:3100/files/getfile?fileName=\<NAME\_FILE\>](#httplocalhost3100filesgetfilefilenamename_file)
- [**Frond-end Project**](#frond-end-project)
  - [Getting started](#getting-started-1)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
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

---

<div id='gettingstarted' />

# Getting Started

To start using this project you will need to  clone this report from github.

1. Create a folder where you want to install your project.
    ```
    mkdir <your_project_folder>
    ```

3. Open a terminal and go to your new folder
    ```
   cd <your_project_folder>
   ```
4. Clone repositore using this command line:
   ```
   git clone https://github.com/hgmancholam/challenge_toolbox_fullstack.git
   ```
5. You will get a copy of this reporitory with the following structure:
    ```
    ├── challenge_toolbox_fullstack
    │   ├── .vscode
    │   ├── techstack-api
    │   ├── techstack-frontend
    │   ├── .gitignore
    │   ├── OTT Full Stack challenge.pdf
    │   ├── README.md
    │   ├── test
    ```


Now, we are goint to put special attention in the following objects:

* `techstack-api`: Folder with backend project.
* `techstack-frontend`: Folder with front-end project. 
* OTT Full Stack challenge.pdf: document with initial requirement. 
* README.md:  This document. 

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system. If you don't have them installed, you can download them from [nodejs.org](https://nodejs.org/).

> Be sure you are using Node version 14. Exactly i used Node v14.21.3
> Once you have installed  the correct version, you can use this command line to set the correct version of Node:
>       __nvm use 14.21.3__ 

<span style="color:#F7FE2E"> __Now, we agre goint to install all needed packages to run our projects__</span>

---

# **API Project**

This project contains all back end with an API for this solution using in **NodeJs** and **Express**.

This project serve all information in three end points.
   
   1. **/files/data:** Return a JSON object with formatted data from all files.
   2. **/files/getfile?fileName=<filename>** Return a JSON object with formatted data from just one file received as parameter in fileName.
   3. **/files/listfiles** This endpoint returns a JSON object with all filenames of files availables in this service.

<br/>

---

## Initialize API

1. Go to folder project:
   you need to move to folder project, so, open a terminal an run:
   ```
   cd techstack-api
   ```
2. Install npm.

    Install with this command line:
    ```
    npm install
   ```   
3. Run project
    
    You can use this command line:
    ```
    npm start 
    ```   

<span style="color:#F7FE2E"> __Now, you can browse end point services in this link: http://localhost:3100__</span>

---

## END POINTS

Once you start this project, you will find  this endpoints:


### [http://localhost:3100/](http://localhost:3100/)

It is a basic call just to be sure  port __3100__ is listening. 
You should see this:


```
{"text":"test is successful!"}
```

### [http://localhost:3100/files/data](http://localhost:3100/files/data)

This call will return all data from files availables in service, previously formatted as requested. 


### [http://localhost:3100/files/listfiles](http://localhost:3100/files/listfiles)

This method will return a list of all files availables. for example:

```
{"files":["test1.csv","test2.csv","test3.csv","test18.csv","test4.csv","test5.csv","test6.csv","test9.csv","test15.csv"]}
```



### [http://localhost:3100/files/getfile?fileName=<NAME_FILE>](http://localhost:3100/files/getfile?fileName=test2.csv)

This method will return all file content formatted as the excercise requested. 

<br/>
 
 ---


# **Frond-end Project**

This project contains all front entd for this solution using in **ReactJs** and **React Boostrap**.

This project have three basic functions:

1.  List all available files in this service.
2.  Get formatted contend from each file when it is picked.
3.  Get all formatted data from files.

<br/>

## Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Go to folder project:
   you need to move to folder project, so, open a terminal an run:
   ```
   cd techstack-frontend
   ```
2. Install npm.

    Install with this command line:
    ```
    npm install
   ```
3. Install NODE: Version 20.4.0.

    Install with this command line:
    ```
    npm install react-bootstrap bootstrap
   ```
 
4. React Bootstrap: 
    
    Your need to install. You can use this command line:
    ```
    npm install react-bootstrap bootstrap
    ```
5. React router dom
    
    Install with this command line:
    ```
    npm install react-router-dom 
    ```   
6. Run project
    
    You can use this command line:

    ```
    npm start
    ```

<span style="color:#F7FE2E"> __Now, you can browse your front-end in this link: http://localhost:3000__</span>

>Be sure you are running API in port 3100 to connect  services to front-end. 
>
>In case you are using other port. It is importan to  change this end point in **src/service/techstak-api.jsx** 
<br/>

---
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

