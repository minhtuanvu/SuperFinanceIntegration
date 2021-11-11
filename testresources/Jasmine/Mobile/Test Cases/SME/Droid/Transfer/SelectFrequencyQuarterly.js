it("SelectFrequencyQuarterly", async function() {
	await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
});