# MusicPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Running the angular application using Docker
Docker Engine is a command line utility tool for Docker and it will be used to create and run containers.

If you don't have docker desktop installed, I would recommend to install Docker Desktop before you follow below steps: ``` https://www.docker.com/products/docker-desktop/ ```


A Docker file has been added with the project to ensure the application runs with same project environment  irrespective of host it runs on.

Make sure to run below command in root of project where Dockerfile exists.

### The steps are much clear

1. Create Docker Image :

    ``` docker build -t angular-docker . ```

2. Run the Docker container :

    ``` docker run -p 4201:4200 angular-docker  ```

3. Access URL : 

    ``` http://localhost:4201/  ```
