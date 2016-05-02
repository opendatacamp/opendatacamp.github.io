// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("navbar-shrink");
  } else {
    $(".navbar-fixed-top").removeClass("navbar-shrink");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a[href^="#"]').bind('click', function(event) {
    var $anchor = $(this);
    if ($anchor.attr('href') != '#') {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - $('.navbar-header').height()
      }, 1500, 'easeInOutExpo');
    }
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a[href!="#"]').click(function() {
  $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
function initMap() {
  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = $('#map');

  var latLng = new google.maps.LatLng(mapElement.data('lat'), mapElement.data('long'));

  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: latLng,

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  };

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement[0], mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var image = '../images/map-marker.png';
  var beachMarker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image,
  });
}
