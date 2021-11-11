define({
    init: function(){
    this.view.preShow = this.preShow;
  },
  
  preShow: function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.setVisibility(false);
      this.view.flxMainContainer.top="0dp";
    }
     this.setUpFormData();
  },
  
  cancelOnClick: function(){
  
},
  setUpFormData: function(){
    var responseData = {"expertPoints":[{"details": "Benefit from our team of experienced advisors."},
                                        {"details": "Leverage our deep understanding of the markets, risks and latest opportunities."},
                                        {"details": "Obtain a tailored investment strategy, designed just for you."},
                                        {"details": "We provide the ideas; you remain in control."}
                                       ], 
                        "imageBannerText":"Get an expert opinion in just a few steps",
                        "headingOne":"Get the most from your investment with our advisory solutions",
                        "headingTwo":"Our Investment Advisory solution gives you access to our team of professional investment advisors to get expert opinion and support your investment decisions. Receive regular investment recommendations that are tailored for you, your situation, and your financial goals. Stay in touch through our digital apps.", 
                        "otherProducts":[{"image":"roboadvisor.png",
                                         "heading":"We invest for you",
                                         "productName":"Robo Advisor",
                                         "productDetails":"Get started in investing. We take care of the hard work with fully diversified portfolios. Managed investing from 0.25%"
                                         },
                                         {
                                         "image":"goalbased.png",
                                         "heading":"We invest for you",
                                         "productName":"Goal-based Investing",
                                         "productDetails":"Align your finances to your life needs and dreams with our goal based investing approach."
                                         },
                                        {"image":"roboadvisor.png",
                                         "heading":"We invest for you",
                                         "productName":"Robo Advisor",
                                         "productDetails":"Get started in investing. We take care of the hard work with fully diversified portfolios. Managed investing from 0.25%"
                                         },
                                         {
                                         "image":"goalbased.png",
                                         "heading":"We invest for you",
                                         "productName":"Goal-based Investing",
                                         "productDetails":"Align your finances to your life needs and dreams with our goal based investing approach."
                                         },]
                       };
    this.view.lblHeading.text = responseData.headingOne;
    this.view.lblDetails.text = responseData.headingTwo;
    var segData = responseData.expertPoints;
    this.view.segExpertBenefits.widgetDataMap = {
      lblNote: "details"
    };
    this.view.segExpertBenefits.setData(segData);
     var otherProdArr = responseData.otherProducts;
    for(var list in otherProdArr){
      this.createDynamicFlex(otherProdArr[list]);
    }
  },
   makeid:function(strLen) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < strLen; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
  createDynamicFlex: function(prodObj){
    var randomIdFlx = this.makeid(4);
    var randomIdLblOne = this.makeid(5);
    var randomIdLblTwo = this.makeid(5);
    var randomIdLblThree = this.makeid(5);
    var randomIdImg = this.makeid(3);
    var randomIdBtn =  this.makeid(4);
    var flexContainer1 = new kony.ui.FlexContainer({
        "id": "flexContainer"+randomIdFlx,
        "top": "0dp",
        "left": "20dp",
        "width": "80%",
        "height": "360dp",
        "zIndex": 3,
        "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
        "isVisible": true,
         "clipBounds": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var basicConfImage ={id : "imgPr"+randomIdImg, isVisible:true, src:prodObj.image};
	var layoutConfImage = {"left":"5%","top":"20dp","width":"55dp","height":"55dp","zIndex":3};
	var PSPConfImage = {glossyEffect:constants.MAGE_GLOSSY_EFFECT_RADIAL};
	var imageProd = new kony.ui.Image2(basicConfImage, layoutConfImage, PSPConfImage);
    flexContainer1.add(imageProd);
    
     var lblDetOneBasic = {
        "id": "lblOne"+randomIdLblOne,
        "skin": "sknLbl727272SSPR15px",
       "left": "5%",
        "top": "10dp",
       "width": "90%",
        "text": prodObj.heading,
        "isVisible": true
      };
          var lblDetOneLayout = {
        containerWeight: 100,
        padding: [0, 0, 0, 0],
        hExpand: true,
        vExpand: false
      };
      var lblDetOneRender = {
        renderAsAnchor: true,
        wrapping: constants.WIDGET_TEXT_WORD_WRAP
      };
     var lblDetOne = new kony.ui.Label(lblDetOneBasic, lblDetOneLayout, lblDetOneRender);
    flexContainer1.add(lblDetOne);
    
         var lblDetTwoBasic = {
        "id": "lblTwo"+randomIdLblTwo,
        "skin": "sknlbl424242ssp30pxbold",
        "left": "5%",
        "top": "10dp",
       "width": "35%",
        "text": prodObj.productName,
        "isVisible": true
      };
          var lblDetTwoLayout = {
        containerWeight: 100,
        padding: [0, 0, 0, 0],
        hExpand: true,
        vExpand: false
      };
      var lblDetTwoRender = {
        renderAsAnchor: true,
        wrapping: constants.WIDGET_TEXT_WORD_WRAP
      };
     var lblDetTwo = new kony.ui.Label(lblDetTwoBasic, lblDetTwoLayout, lblDetTwoRender);
    flexContainer1.add(lblDetTwo);
    
         var lblDetThreeBasic = {
        "id": "lblThree"+randomIdLblThree,
        "skin": "sknlbl424242regular15px",
        "left": "5%",
        "top": "20dp",
       "width": "90%",
        "text": prodObj.productDetails,
        "isVisible": true
      };
          var lblDetThreeLayout = {
        containerWeight: 100,
        padding: [0, 0, 0, 0],
        hExpand: true,
        vExpand: false
      };
      var lblDetThreeRender = {
        renderAsAnchor: true,
        wrapping: constants.WIDGET_TEXT_WORD_WRAP
      };
     var lblDetThree = new kony.ui.Label(lblDetThreeBasic, lblDetThreeLayout, lblDetThreeRender);
    flexContainer1.add(lblDetThree);
    
    var btnBasic ={id:"btnLearnMore"+randomIdBtn, "top":"20dp","width":"90%","height":"40dp","bottom":"20dp", "centerX":"50%", isVisible:true, skin:"sknBtn0095e4RoundedffffffSSP26px", text:"Learn More"};
	var btnLayout ={containerWeight:100, padding:[0,0,0,0], margin:[0,0,0,0], hExpand:true, vExpand:false, displayText:true, contentAlignment:constants.CONTENT_ALIGN_CENTER};
	var btnPSP ={};
	var btnLearnMore = new kony.ui.Button(btnBasic, btnLayout, btnPSP);
     flexContainer1.add(btnLearnMore);
    this.view.flxHorScrProductDetails.add(flexContainer1);
  }

});
