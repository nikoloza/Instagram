	 _____                _       _
	/  ___|              | |     | |
	\ `--.  ___ _ __ __ _| |_ ___| |__
	 `--. \/ __| '__/ _` | __/ __| '_ \
	/\__/ / (__| | | (_| | || (__| | | |
	\____/ \___|_|  \__,_|\__\___|_| |_|


Custom use of Scratch Framework
=============

Scratch helps you to make high level front end architecture using `Less` and `HTML5`. Here is documentation of it: https://github.com/nikoloza/Scratch

-------------

How to setup project
-------------

### Clone
Clone project by command line and go to working directory

	$ git clone git@github.com:nikoloza/MayBelline.git maybelline
	$ cd maybelline


-------------

### Run server
There is many options how to run simple server. Anyways it will work by opening `index.html` file simply.

Run express based server via Grunt, watch and compile files (the solution will be run on 3333 port):

	$ grunt server

Run simple http server:

	$ python -m SimpleHTTPServer 3333


-------------

### Setup Grunt
Used **Grunt** to compile, watch and minify CSS.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

Then you need to install required packages:

	$ npm install

With our grunt config we have 5 states to use grunt:

Simply one time compile files:

	$ grunt

Watch and compile files:

	$ grunt run

Run express based simple http server, watch and compile files:

	$ grunt server

Make files ready for production:

	$ grunt production

Clean all grunt generated files:

	$ grunt clean