require(["Test Suites/IOS/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/IOS/RB/RB_LoginSuite"], function() {
		require(["Test Suites/IOS/RB/RB_SanitySuite"], function() {
			require(["Test Suites/IOS/RB/RB_LogoutSuite"], function() {
								jasmine.getEnv().execute();
			});
		});
	});
});