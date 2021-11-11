require(["Test Suites/IOS/RB/RB_SanitySuite"], function() {
	require(["Test Suites/IOS/SME/SME_SanitySuite"], function() {
				jasmine.getEnv().execute();
	});
});