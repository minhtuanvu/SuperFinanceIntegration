var LoginDetails={
 	username:'dbxJasmine1234',
 	password:'Kony@1234'
};

var appDetails = {
	appVersion : "App Version 2021.01.00"
};

var accountsLanding = {
	checking : "Checking",
	creditCard : "Credit Card",
	deposit : "12 Month",
	loan : "Loan",
	savings : "Savings"
};

var myBills = {
	payeeName : {
		electricity : "Electricity",
		automation : "automationuser",
		creditCard : "credit"
	}
};


var ManageRecipient = {
	recipientName : {
		externalAccount : "ExtAccJasmine",
		internationalAccount : "InternationalAcc",
		sameBankAccount : "sameBank",
		p2pRecipient : "PToPRecipient"
	}
};

var Transfers={
	ownAccount : {
		fromAccount : "Check",
		toAccount : "Credit"
	},
	sameBankAccount : {
		fromAccount : "Check",
		toAccount : ManageRecipient.recipientName.sameBankAccount
	},
	p2pRecipient : {
		fromAccount : "Check",
		toAccount : ManageRecipient.recipientName.p2pRecipient
	},
	internationalAccount : {
		fromAccount : "Check",
		toAccount : ManageRecipient.recipientName.internationalAccount
	},
	externalAccount : {
		fromAccount : "Check",
		toAccount : ManageRecipient.recipientName.externalAccount
	}
};
