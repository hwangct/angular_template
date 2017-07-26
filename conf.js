// Require protractor-jasmine2-screenshot-reporter to generate reports.
var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');

// Set up timestamp for filename
var today = new Date();
var month = today.getMonth() + 1;
var timeStamp = today.getFullYear() + '-' + month + '-' + today.getDate() + ' ' + today.getHours()+ 'h' + today.getMinutes() + 'm';

// Provide destination and filename where protractor-reports will be stored.
var reporter = new HtmlReporter({
    dest: 'tests/e2e/reports/' + timeStamp + '/',
    filename: 'protractor-report.html'
});

exports.config = {
  //directConnect: true,
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',
    
  seleniumServerJar: 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar',
  specs: ['tests/e2e/*spec.js'],
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {

    defaultTimeoutInterval: 170000

  },

  //Before launch function to run initial configurations before start running the test
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      reporter.beforeLaunch(resolve);
    });

  },

  // on initial environment is set where reports are added.
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Timeout can be adjusted according to your suitability by default it's 10 seconds.
  allScriptsTimeout: 500
};