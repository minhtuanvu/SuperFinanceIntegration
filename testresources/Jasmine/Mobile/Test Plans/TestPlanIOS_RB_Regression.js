require(["Test Suites/IOS/RB/RB_PreLogin_Support"], function() {
	require(["Test Suites/IOS/RB/RB_LoginSuite"], function() {
		require(["Test Suites/IOS/RB/RB_PostLogin_Support"], function() {
			require(["Test Suites/IOS/RB/RB_AccountsDashboard"], function() {
				require(["Test Suites/IOS/RB/RB_AccountsLandingSavings"], function() {
					require(["Test Suites/IOS/RB/RB_AccountsLandingChecking"], function() {
						require(["Test Suites/IOS/RB/RB_AccountsLandingCreditCard"], function() {
							require(["Test Suites/IOS/RB/RB_AccountsLandingLoan"], function() {
								require(["Test Suites/IOS/RB/RB_AccountsLandingDeposit"], function() {
									require(["Test Suites/IOS/RB/RB_ManageRecipientSameBank"], function() {
										require(["Test Suites/IOS/RB/RB_ManageRecipientP2P"], function() {
											require(["Test Suites/IOS/RB/RB_ManageRecipientInternationalAccount"], function() {
												require(["Test Suites/IOS/RB/RB_ManageRecipientExternalAccount"], function() {
													require(["Test Suites/IOS/RB/RB_MyBills"], function() {
														require(["Test Suites/IOS/RB/RB_TransferOwnAccount"], function() {
															require(["Test Suites/IOS/RB/RB_TransferSameBankAccount"], function() {
																require(["Test Suites/IOS/RB/RB_TransferP2PAccount"], function() {
																	require(["Test Suites/IOS/RB/RB_TransferExternalAccount"], function() {
																		require(["Test Suites/IOS/RB/RB_TransferInternationalAccount"], function() {
																			require(["Test Suites/IOS/RB/RB_TransferActivities"], function() {
																				require(["Test Suites/IOS/RB/RB_Settings"], function() {
																					require(["Test Suites/IOS/RB/RB_Feedback"], function() {
																						require(["Test Suites/IOS/RB/RB_LogoutSuite"], function() {
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
							});
						});
					});
				});
			});
		});
	});
});