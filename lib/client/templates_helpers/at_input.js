/* global
  AccountsTemplates: false,
  FlowRouter: false
*/
'use strict';

AccountsTemplates.atInputRendered.push(function(){
  var router = app.$router;
  var fieldId = this.data._id;
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;
  var inputQueryVal = router.currentRoute.query[queryKey];
  if (inputQueryVal) {
    this.$("input#at-field-" + fieldId).val(inputQueryVal);
  }
});
