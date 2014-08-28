/*global define, require*/
define([], function () {
	"use strict";

	// Shim jasmine. jasmine.js creates the "window.jasmineRequire" global. jasmine-html.js adds properties to that global.
	require.config({
		paths: {
			"jasmine": "lib/jasmine",
			"jasmine-html": "lib/jasmine-html",
			"jasmine-jquery":"lib/jasmine-jquery",
			"viewmodels": "../web/scripts/app/viewmodels",
			"repositories": "../web/scripts/app/repositories",
		},
		shim: {
			"jasmine": {
				exports: "jasmineRequire"
			},
			"jasmine-html": {
				deps: ["jasmine"],
				exports: "jasmineRequire"
			},
			"jasmine-jquery": {
				deps: ["jasmine"]
			}
		}
	});
 	var	specs = ["specs/create.spec.js"];
	// Load the HTML bootloader and all of the specs
	require(["lib/jasmine.amd/bootAmd","jasmine-jquery"].concat(specs), function (boot) {
		// All of the specs have been loaded. Initialize the HTML Reporter and execute the environment.
		boot.initializeHtmlReporter();
		boot.execute();
	});

});
