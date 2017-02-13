# Kickstarting applications

This git repository is the first part of a larger project. 
This larger project aims at developing web-applications with open data which are easy to maintaint due to the use of component lib's and styleguides. Below links to the other git repositories:
- [jsd_01_kickstart] (https://github.com/moppedijk/jsd_01_kickstart)
- [jsd_02_application] (https://github.com/moppedijk/jsd_02_application)
- [jsd_03_components] (https://github.com/moppedijk/jsd_03_components)

## Synopsis

How to kickstart web-applications and which tools to use. I am looking into different kind of build tools and tools for workflow and faster development. At first i started looking into the [Yeoman project] (http://yeoman.io/) which helps you to scaffold web-applications whith the help of generators. Yeoman has good generators for Angular, Backbone, React and other projects. So i Started using Yo, and the Yeoman project for scaffolding projects. This worked-out out in the first place. But the generators for Meteor where not so supportive at that time. That's why I chose to create this Meteor boilerplate for faster kickstarting of Meteorjs projects. If there is a better way please let me know. 

## Code Example

To explain the boilerplate i wrote down the folder structure and some best practices i use for Meteor development. By clicking on the link in the folder structure there's more information about the meaning of the folder. 

### Folder structure

[Client] (https://github.com/moppedijk/jsd_01_kickstart/tree/master/boilerplate/client)

[Lib] (https://github.com/moppedijk/jsd_01_kickstart/tree/master/boilerplate/lib)

[Private] (https://github.com/moppedijk/jsd_01_kickstart/tree/master/boilerplate/private)

[Public] (https://github.com/moppedijk/jsd_01_kickstart/tree/master/boilerplate/public)

[Server] (https://github.com/moppedijk/jsd_01_kickstart/tree/master/boilerplate/server)

### Best practices

Meteor doesn’t have hard and fast rules about how to structure a project.

* The important thing here is that only one template belongs in a file and you should have that file be named the same as the template inside.
* Folder structure and file naming should match the url in your browser.
* Keep your template specific css right next to the template it applies to in your client/views folder
* Keep template names and file names in sync
* Use iron-router url paths to determine your folder structure
* Start reusable partial templates with _ and keep them in shared if more than one parent uses it
* Keep template specific styles next to the template, targeted specifically to that template using ids and classes.
* Use controllers for handling view logic and data control; Iron:RouteCountroller
* Keep views as stupid as possible, only data forwarding and simple UI functionality

## Motivation

Yo generators for Meteorjs are not that good written and it they do not give the scaffolding groundfloor i was looking for. Besides that Meteorjs has it's own CLI for bootstrapping new web-applications with al the functionalities for development within it. Meteorjs bootstrapping only creates a folder project with .meteor packages, js fils, css file and html file. There is no folder structure for a large application with client, public, server and test folders. I missed the scaffolding of a well documented project with a good folderstructure that's why i created this boilerplate.

## Installation

1) Follow the instructions on [www.meteor.com] (https://www.meteor.com/install) and install the framework. 

2) Clone this repository `https://github.com/moppedijk/jsd_01_kickstart.git` via git.

For further development i installed sass support and the iron router. 

3) Add sass scss support troughout `meteor add fourseven:scss`

4) Add iron router support troughout `meteor add iron:router`

## API Reference

For reference check the [Meteorjs documentation] (http://docs.meteor.com/#/full/)

## Contributors

This project is contributed by Joost F. (https://github.com/joostf)

### Resources

* http://joshowens.me/how-to-organize-your-meteor-js-app/
* http://www.meteor.com/try
* http://meteortips.com/first-meteor-tutorial/structure/

## Licence
GNU General Public Licence 2.0
