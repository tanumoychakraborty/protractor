exports.config = {
	framework : 'jasmine2',
	restartBrowserBetweenTests: true,
	onPrepare : function() {
		var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'Reports/'+ Math.floor(Date.now()),
			cleanDestination: false,
			takeScreenshots: true,
			takeScreenshotsOnlyOnFailures: true,
			consolidate: true,
			consolidateAll: true
		}));
	},
	capabilities : {
		browserName : 'chrome',
		'chromeOptions': {
		    'args': ['--headless']
		}
/*		'shardTestFiles': true,
		'maxInstances': 1*/
	},
	suites : [ 'specs/specPass.js'],
	/*	onPrepare: function() {
	 var jasmineReporters = require('protractor-jasmine2-html-reporter');
	 jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	 consolidateAll: true,
	 savePath: 'testresults',
	 filePrefix: 'xmloutput'
	 }));
	 },*/
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
		isVerbose : true,
		includeStackTrace : true,
		realtimeFailure: true
		},
};
