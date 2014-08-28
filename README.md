jasmine_ci
==========


This is the sample code of jasmine requirejs implementation using https://github.com/erikringsmuth/jasmine2-amd-specrunner/

I configure this unit test suites with team city.

Where i am facing issues while excuting test suites.

Starting: E:\APPS\TeamCity\buildAgent\work\12a3bd79c15e632f\Web.UnitTests\phantomjs.exe E:\APPS\TeamCity\buildAgent\work\12a3bd79c15e632f\Web.UnitTests\run-jasmine.js E:\APPS\TeamCity\buildAgent\work\12a3bd79c15e632f\Web.UnitTests\SpecRunner.html
[17:00:25]in directory: E:\APPS\TeamCity\buildAgent\work\12a3bd79c15e632f
[17:00:30]'waitFor()' finished in 224ms.
[17:00:30]TypeError: 'null' is not an object (evaluating 'document.body.querySelector('.alert > .bar.passed').innerText')
[17:00:30]
[17:00:30]  phantomjs://webpage.evaluate():58
[17:00:30]  phantomjs://webpage.evaluate():61
[17:00:30]  phantomjs://webpage.evaluate():61
[17:00:30]Process exited with code 0
[17:00:30]Publishing internal artifacts


But running throw cmd using Phantonjs is fine.
