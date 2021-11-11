require(["Test Suites/Droid/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/Droid/RB/RB_Login"], function() {
		require(["Test Suites/Droid/RB/RB_PostLogin"], function() {
			require(["Test Suites/Droid/RB/RB_ManageRecipients"], function() {
				require(["Test Suites/Droid/RB/RB_P2PTransfers"], function() {
					require(["Test Suites/Droid/RB/RB_AccountsDashboard"], function() {
						require(["Test Suites/Droid/RB/RB_InternationalTransfers"], function() {
							require(["Test Suites/Droid/RB/RB_ExternalTransfers"], function() {
								require(["Test Suites/Droid/RB/RB_Messages"], function() {
									require(["Test Suites/Droid/RB/RB_MyBills"], function() {
										require(["Test Suites/Droid/RB/RB_MyMoney"], function() {
											require(["Test Suites/Droid/RB/RB_OwnAccTransfers"], function() {
												require(["Test Suites/Droid/RB/RB_SameBankTransfers"], function() {
													require(["Test Suites/Droid/RB/RB_AllAccounts"], function() {
														require(["Test Suites/Droid/RB/RB_Logout"], function() {
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
});