require(["Test Suites/Droid/T24RB/Login"], function() {
	require(["Test Suites/Droid/T24RB/ManageBeneficiaries"], function() {
		require(["Test Suites/Droid/T24RB/PaymentsinT24Transact"], function() {
			require(["Test Suites/Droid/T24RB/Payments"], function() {
				require(["Test Suites/Droid/T24RB/AllAccounts"], function() {
					require(["Test Suites/Droid/T24RB/AccountsOverview"], function() {
						require(["Test Suites/Droid/T24RB/CombinedStatement"], function() {
							require(["Test Suites/Droid/T24RB/TransferbetweenAccountinT24Transact"], function() {
								require(["Test Suites/Droid/T24RB/PostLoginSupport"], function() {
									require(["Test Suites/Droid/T24RB/AccountPreference"], function() {
										require(["Test Suites/Droid/T24RB/ProfileSettings"], function() {
											require(["Test Suites/Droid/T24RB/ConsentManagement"], function() {
												require(["Test Suites/Droid/T24RB/ExchangeRates"], function() {
													require(["Test Suites/Droid/T24RB/MyMoney"], function() {
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