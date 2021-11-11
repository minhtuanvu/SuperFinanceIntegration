require(["Test Suites/IOS/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/IOS/RB/RB_LoginSuite"], function() {
		require(["Test Suites/IOS/RB/RB_ManageRecipientInternationalAccount"], function() {
			require(["Test Suites/IOS/RB/RB_ManageRecipientSameBank"], function() {
				require(["Test Suites/IOS/RB/RB_ManageRecipientExternalAccount"], function() {
					require(["Test Suites/IOS/RB/RB_AccountsDashboard"], function() {
						require(["Test Suites/IOS/RB/RB_MyBills"], function() {
							require(["Test Suites/IOS/RB/RB_LogoutSuite"], function() {
								require(["Test Suites/IOS/SME/SME_PreLogin_Support"], function() {
									require(["Test Suites/IOS/SME/SME_LoginSuite"], function() {
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
					});
				});
			});
		});
	});
});