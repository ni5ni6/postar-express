$(function() {

  var categories = Object.keys(local_data);

  $.each(categories, function(i, option) {
    $('#category').append($('<option/>').attr("value", option).text(option));
  });

  $('#category').change(function(e) {
    $('#subcategory').empty();
    console.log(e);
    var category = $(this).val();
    console.log(category);
    var subcategories = local_data[category];
    $.each(subcategories, function(i, option) {
      $('#subcategory').append($('<option/>').attr("value", option).text(option));
    });
  });

})