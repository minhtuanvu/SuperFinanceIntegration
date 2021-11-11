//This is the entry point for automation. You can either:
//1.Require any one of the created test plans like this:
//require([/*<test plan file>*/]);

// or
//2.  require the test suites along with executing jasmine as below
//Nested require for test suites will ensure the order of test suite exectuion
//Since this is file is to be manually edited, make sure to update 
//any changes (rename/delete) to the test suites/plans.


var deviceInfo = kony.os.deviceInfo();

var userType = "_RB"; //valid values are "_RB" and "_SME"
var executionType = "_Regression"; // "_Sanity" or "_Regression"
var integrated="_T24"; // "T24" or ""

if(integrated === "_T24"){
	
	require(["TestData/testData"+integrated]);
	
}else{

	require(["TestData/testData"+userType]);

}

if (deviceInfo.name === "iPhone") {
	
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
	require(["Test Plans/TestPlanIOS" + userType + executionType]);
// 	require(["Test Plans/DemoIOS"]);
// 	require(["Test Plans/tempPlan"]);

} else {

 require(["Test Plans/TestPlanAndroid"+userType+ executionType+integrated]);
//  require(["Test Plans/TestPlanAndroid_RB_HealthCheck_T24"]);
//     require(["Test Plans/tempPlan"]);
}



/*

if(deviceInfo.name === "iPhone"){
  
  require(["Test Plans/DemoIOS"]);
  
}else{
  
  require(["Test Plans/DemoAndroid"]);
}
*/