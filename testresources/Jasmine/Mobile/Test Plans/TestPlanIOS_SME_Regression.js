require(["Test Suites/IOS/SME/SME_PreLogin_Support"], function() {
	require(["Test Suites/IOS/SME/SME_LoginSuite"], function() {
		require(["Test Suites/IOS/SME/SME_AccountsDashboard"], function() {
			require(["Test Suites/IOS/SME/SME_MyBills"], function() {
				require(["Test Suites/IOS/SME/SME_AddRecipientExternalAccount"], function() {
					require(["Test Suites/IOS/SME/SME_AddRecipientSameBank"], function() {
						require(["Test Suites/IOS/SME/SME_TransfersSuite"], function() {
							require(["Test Suites/IOS/SME/SME_LogoutSuite"], function() {
																jasmine.getEnv().execute();
							});
						});
					});
				});
			});
		});
	});
});