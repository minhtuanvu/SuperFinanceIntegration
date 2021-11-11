/*
@function: setError
@param: { Interface Controller } form
@param: { AnyObject } context
@description: set the error text to a label in error screen
*/
func setError(_ form: frmErrorController, _ context: AnyObject?) {
  let dict = context as! Dictionary<String,AnyObject>
  form.lblAlertMessage!.setText(dict[Constants.ERROR] as! String)
}
