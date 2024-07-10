$(".denomination-other input").on('keypress', function (event) {
    // allow only int values
    // TODO: remove leading 0
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
    
    // Update hidden radio button and button text
    var matchingRadio = $(`input[name="amount"][value=${event.key}]`);
    matchingRadio.prop('checked', true);
    $("button").text('Donate $' + $(this).val() + key );
    
    // Remove selection from pre-defined amounts (optional)
    $(".denomination").removeClass("selected").prop('checked', false);
    $(this).addClass("selected");
  });
  