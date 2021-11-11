define("AccountModule/userfrmAccountDetails2Controller", {
    //mobile controller
    accountDetails: null,
    segLength: 0,
    startY: 0,
    //setting the data to transaction segment in this function // pass an argument 'segData' to the function in the service callback
    setTransactionSegmentData: function() {
        //get the data here and assign it to segdata
        var segData = [
            [{
                    "lblHeader": {
                        "text": "Section Header 1"
                    }
                },
                [{
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "12/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Money Transfer to Linda"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "06/21/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "12/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Money Transfer to Linda"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "06/21/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "12/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Money Transfer to Linda"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "06/21/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }]
            ],
            [{
                    "imgUpArrow": {
                        "src": ""
                    },
                    "lblHeader": {
                        "i18nkey": "kony.mb.accdetails.postedTransactions",
                        "text": "Label"
                    }
                },
                [{
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "02/26/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Wire Trasfers to Stuvert"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }]
            ],
            [{
                    "imgUpArrow": {
                        "src": ""
                    },
                    "lblHeader": {
                        "i18nkey": "kony.mb.accdetails.postedTransactions",
                        "text": "Label"
                    }
                },
                [{
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "02/26/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Wire Trasfers to Stuvert"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }]
            ],
            [{
                    "imgUpArrow": {
                        "src": ""
                    },
                    "lblHeader": {
                        "i18nkey": "kony.mb.accdetails.postedTransactions",
                        "text": "Label"
                    }
                },
                [{
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "02/26/2018"
                    },
                    "lblTransaction": {
                        "text": "Bill Pay to AT&T"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "11/10/2018"
                    },
                    "lblTransaction": {
                        "text": "Check Payment to School"
                    },
                    "lblTransactionAmount": {
                        "text": "-$200.00"
                    }
                }, {
                    "imgIndicator": {
                        "src": "imagedrag.png"
                    },
                    "lblDate": {
                        "text": "03/07/2018"
                    },
                    "lblTransaction": {
                        "text": "Wire Trasfers to Stuvert"
                    },
                    "lblTransactionAmount": {
                        "text": "-$83.54"
                    }
                }]
            ]
        ];
        if (segData == {}) { //as the data is empty we are showing no transactions message
            this.showNoTransActions();
        } else {
            var widgetDataMap = {
                lblTransaction: "description",
                lblDate: "TransactionDate",
                lblTransactionAmount: "Amount",
                transactionId: "TransactionId",
                lblHeader: "lblHeader"
            };
            this.view.segTransactions.widgetDataMap = widgetDataMap;
            this.view.segTransactions.setData(segData);
            this.view.segTransactions.setVisibility(true);
            this.view.flxNoTransactions.setVisibility(false);
        }
    },
    //adds dummy rows to accomidate for the space for the available balance data at the top
    addDummyRows: function() {
        var segWidgetDataMap = this.view.segTransactions.widgetDataMap;
        segWidgetDataMap["flxEmptyHeader"] = "flxEmptyHeader";
        segWidgetDataMap["flxEmptyRow"] = "flxEmptyRow";
        this.view.segTransactions.widgetDataMap = segWidgetDataMap;
        var segData = this.view.segTransactions.data;
        var segLength = 0;
        for (let i = 0; i < segData.length; i++) {
            segLength = segLength + (segData[i][1].length * 66) + 49; //66 is the row height and 49 is the header height
        }
        segData.unshift([{
                "template": "flxEmptyHeader",
                "flxEmptyHeader": {
                    "height": "0dp"
                }
            },
            [{
                "template": "flxEmptyRow",
                "flxEmptyRow": {
                    "height": "255dp"
                }
            }]
        ]);
        segLength = segLength + 255;
        this.view.segTransactions.setData(segData);
        this.segLength = segLength;
    },
    preShow: function() {
        var self = this;
        this.view.segTransactions.onRowClick = function() {
            kony.ui.Alert("clicked on a segment row");
        };
        this.view.segTransactions.onScrolling = function() {
            self.transactionsSegmentOnScrolling();
        };
        this.setTransactionSegmentData(); //setting data to transaction segment
        this.addDummyRows(); //adds dummy rows for graph at the top and ads at the bottom
    },
    transactionsSegmentOnScrolling: function() {
        var parallaxSpeed = 1;
        var yOffset = this.view.segTransactions.contentOffsetMeasured.y;
        this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
        this.view.flxBalance.top = 55 - (yOffset * parallaxSpeed) + "dp";
        this.view.flxSeperator2.top = 235 - (yOffset * parallaxSpeed) + "dp";
    },
    showNoTransActions: function() { //replacing with default top height and setting visibility of segment to false
        this.view.flxSearch.top = 0 + "dp";
        this.view.flxBalance.top = 55 + "dp";
        this.view.flxSeperator2.top = 235 + "dp";
        this.view.segTransactions.contentOffset = {
            x: "0dp",
            y: "0dp"
        };
        this.view.segTransactions.setVisibility(false);
        this.view.flxNoTransactions.setVisibility(true);
    },
});
define("AccountModule/frmAccountDetails2ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a7b9e2a2cf28488c956a7e2057649ee3: function AS_Form_a7b9e2a2cf28488c956a7e2057649ee3(eventobject) {
        var self = this;
        // this.init();
        kony.print("in init");
    },
    AS_Form_ibda741007a14e3298c32cff201f810d: function AS_Form_ibda741007a14e3298c32cff201f810d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bb4e609de3bf4d4982f615d2a0b5e48d: function AS_BarButtonItem_bb4e609de3bf4d4982f615d2a0b5e48d(eventobject) {
        var self = this;
        this.gotoAccountInfo();
    }
});
define("AccountModule/frmAccountDetails2Controller", ["AccountModule/userfrmAccountDetails2Controller", "AccountModule/frmAccountDetails2ControllerActions"], function() {
    var controller = require("AccountModule/userfrmAccountDetails2Controller");
    var controllerActions = ["AccountModule/frmAccountDetails2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
