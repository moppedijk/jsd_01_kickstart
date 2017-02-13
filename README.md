# Kickstarting applications

This git repository is the first part of a larger project. 
This larger project aims at developing web-applications with open data which are easy to maintaint due to the use of component lib's and styleguides. Below links to the other git repositories:
- [jsd_01_kickstart] (https://github.com/moppedijk/jsd_01_kickstart)
- [jsd_02_application] (https://github.com/moppedijk/jsd_02_application)
- [jsd_03_components] (https://github.com/moppedijk/jsd_03_components)

## Synopsis



How to kickstart web-applications and which tools to use. I am looking into different kind of buildtools and tools for workflow for faster development.
With these tools i want to build a Meterojs webapplication. Yo generators could create a good scaffolding application if the Yo generator is good written.
For faster development i am seeking tools for scaffolding, package managing, compiling, testing and serving.

Started using Yo, and the Yeoman project for scaffolding projects. This worked-out out in the first place. 
But the generators for meteorjs where not so supportive. That's why i chose to use the normal meteorjs workflow instead. 

## Code Example

Meteor bootstrapping
Explanation of the folder structure

### Folder structure

Client
Public
lib
Server
Test

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

Yo generators for Meteorjs are not that good written and it they do not give the scaffolding groundfloor i was looking for.
Intead Meteorjs has it's own CLI for bootstrapping new webapplications with al the functionalities for development within.

Meteorjs bootstrapping only creates a folder project with .meteor packages, js fils, css file and html file.
There is no folder structure for a large application with client, public, server and test.

I miss the scaffolding of a well documented project with a good folderstructure and documentation.
When i instantiate a new webapplication wit meteor CLI i want all the folders withit, client, public etc.

## Installation

Added sass scss support troughout `meteor add fourseven:scss`
Added iron router support troughout `meteor add iron:router`

## API Reference

## Tests

## Contributors

### Resources

* http://joshowens.me/how-to-organize-your-meteor-js-app/
* http://www.meteor.com/try
* http://meteortips.com/first-meteor-tutorial/structure/


## Licence
GNU General Public Licence 2.0
