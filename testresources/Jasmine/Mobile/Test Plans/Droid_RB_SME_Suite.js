require(["Test Suites/Droid/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/Droid/SME/SME_PreLogin_Support"], function() {
		require(["Test Suites/Droid/RB/RB_MyBills"], function() {
			require(["Test Suites/Droid/SME/SME_MyBills"], function() {
				require(["Test Suites/Droid/RB/RB_SettingsSuite"], function() {
					require(["Test Suites/Droid/SME/SME_SettingsSuite"], function() {
						require(["Test Suites/Droid/RB/RB_Transfers"], function() {
							require(["Test Suites/Droid/SME/SME_Transfers"], function() {
																jasmine.getEnv().execute();
							});
						});
					});
				});
			});
		});
	});
});