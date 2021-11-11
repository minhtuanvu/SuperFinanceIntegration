define("flxEmptyRow", function() {
    return function(controller) {
        var flxEmptyRow = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxEmptyRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEmptyRow.setDefaultUnit(kony.flex.DP);
        flxEmptyRow.add();
        return flxEmptyRow;
    }
})