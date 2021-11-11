require(["Test Suites/Droid/RB/RB_SanitySuite"], function() {
	require(["Test Suites/Droid/SME/SME_SanitySuite"], function() {
				jasmine.getEnv().execute();
	});
});