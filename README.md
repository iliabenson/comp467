# Draw Something Authoring Tool

## Project Branches
***

* The Master branch is the completed software, this is what you should download to deploy

* The Deployment branch is identical to the master branch, however, the AWS VM i was using was not capable of compiling angular code nor did it have enough ram to download all the angular and laravel dependencies, thats what you get for free tier. In any case the deployment branch just has everything compiled and all the dependencies loaded, you can just copy paste this branch directory 1 level above public as the public directory in it is what should be the document root on your server.

## Project Installation
***

You need to have composer and npm installed on the host system you wish to install the client on.
Minimum:
`composer version (1.0.0-beta2) 2016-03-27`
`npm version 3.5.2`

To install laravel cd into the `comp467` directory and run `composer dumpautoload` this will download all the dependencies

To install angular cd into the `comp467/frontend` folder and run `npm install`

## High Level Technologies
***

#### Laravel 5.5 (Backend REST API)

Laravel was used for the backend, it supports the following technologies:

* Eloquent ORM
* Dependency Injection
* MVC
* Unit Test

#### Angular 5 (Frontend SPA)

Angular was used for the frontend, it supports the following technologies:

* Dependency Injection
* MVC
* Unit Test

The `ng2-canvas-whiteboard` package was used to help with the angular authoring tool.

## Project Features
***

The application allows the user to:
* Draw on the whiteboard
* Pick a color
* Undo an action
* Redo an action
* Clear all content
* Download the content of the whiteboard as a png file
* Change the thickness of the drawing line, this is done by making a REST API to the backend
* Log all API calls
* Clear logged API calls
