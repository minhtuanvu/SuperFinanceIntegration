require(["Test Suites/Droid/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/Droid/RB/RB_Login"], function() {
		require(["Test Suites/Droid/RB/RB_SanitySuite"], function() {
			require(["Test Suites/Droid/RB/RB_Logout"], function() {
								jasmine.getEnv().execute();
			});
		});
	});
});