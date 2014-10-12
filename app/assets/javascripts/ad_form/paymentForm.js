Dropify.PaymentForm = function(paymentFormSelector) {
  this.$paymentForm = $(paymentFormSelector);
};

Dropify.PaymentForm.prototype = {
  show: function() {
    this.$paymentForm.submit();
  }
}