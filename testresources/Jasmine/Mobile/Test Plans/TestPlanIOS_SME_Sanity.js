require(["Test Suites/IOS/SME/SME_PreLogin_Support"], function() {
	require(["Test Suites/IOS/SME/SME_LoginSuite"], function() {
		require(["Test Suites/IOS/SME/SME_SanitySuite"], function() {
			require(["Test Suites/IOS/SME/SME_LogoutSuite"], function() {
								jasmine.getEnv().execute();
			});
		});
	});
});