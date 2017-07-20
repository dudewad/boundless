# Getting started

If you are interested in compiling the project you'll need to have the following tools installed:

- [NodeJS](https://nodejs.org/en/) 
- Grunt CLI installed via NPM at the global level [see the Grunt 'getting started' docs for more](https://gruntjs.com/getting-started)

Once those tools are installed, run:

- `npm install`
- `grunt dev`

The grunt dev task will build the project and run a local web server with watchers for the dev environment.

## Build process

I instrumented a Grunt build from scratch for this project. I am using Grunt simply because I am familiar
with it and it is quick/easy to set up for basic projects like this. Note that lots of optimizations could
still be done to improve both dev build process as well as dist output, but this gets the project up and
running in a way that is still extensible. It includes a dev environment and a build process for dist->prod.

If you wish to build for prod (a fully packaged dist directory), then run:

- `grunt build:prod`
