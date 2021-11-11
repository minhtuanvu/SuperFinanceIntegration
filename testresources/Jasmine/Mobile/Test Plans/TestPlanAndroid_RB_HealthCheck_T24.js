require(["Test Suites/Droid/T24RB/Login"], function() {
	require(["Test Suites/Droid/T24RB/HealthCheck"], function() {
		require(["Test Suites/Droid/RB/RB_Logout"], function() {
						jasmine.getEnv().execute();
		});
	});
});