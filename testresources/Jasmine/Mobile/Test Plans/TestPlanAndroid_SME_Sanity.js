require(["Test Suites/Droid/SME/SME_PreLogin_Support"], function() {
	require(["Test Suites/Droid/SME/SME_Login"], function() {
		require(["Test Suites/Droid/SME/SME_SanitySuite"], function() {
			require(["Test Suites/Droid/SME/SME_Logout"], function() {
								jasmine.getEnv().execute();
			});
		});
	});
});