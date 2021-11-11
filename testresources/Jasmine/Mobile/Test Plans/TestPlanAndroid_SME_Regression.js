require(["Test Suites/Droid/SME/SME_PreLogin_Support"], function() {
	require(["Test Suites/Droid/SME/SME_Login"], function() {
		require(["Test Suites/Droid/SME/SME_AccountsDashboard"], function() {
			require(["Test Suites/Droid/SME/SME_SettingsSuite"], function() {
				require(["Test Suites/Droid/SME/SME_MyBills"], function() {
					require(["Test Suites/Droid/SME/SME_Transfers"], function() {
						require(["Test Suites/Droid/SME/SME_Logout"], function() {
														jasmine.getEnv().execute();
						});
					});
				});
			});
		});
	});
});