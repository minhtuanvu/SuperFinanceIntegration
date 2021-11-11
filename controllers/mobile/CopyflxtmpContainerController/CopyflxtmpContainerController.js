define({ 

 //Type your controller code here 
  onClickDelete: function(eventobject, context) {
    var row_index = (context.rowIndex);
    this.executeOnParent("deleteService",row_index);
  }

 });