$(document).ready(function() {
    // Initialize an empty dictionary to store Amenity IDs
    var amenityIds = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).closest('li').data('id');
        var amenityName = $(this).closest('li').data('name');

        if ($(this).is(':checked')) {
            // Checkbox is checked, add Amenity ID to the dictionary
            amenityIds[amenityId] = amenityName;
        } else {
            // Checkbox is unchecked, remove Amenity ID from the dictionary
            delete amenityIds[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of checked Amenities
        var amenitiesList = Object.values(amenityIds).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
	const apiStatus = $('DIV#api_status');
	$.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
    	if (data.status === 'OK') {
      		apiStatus.addClass('available');
    	} else {
      		apiStatus.removeClass('available');
    	}
  });
});
