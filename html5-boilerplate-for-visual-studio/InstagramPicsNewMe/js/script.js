window.app = function ($) {
    var pub = {};
   
    pub.init = function () {
        navigator.geolocation.getCurrentPosition(foundYou);
    }

    function foundYou(position) {
        $("#location").html("Looks Like You're At - Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);

        $.get("https://api.instagram.com/v1/media/search?client_id=4e0171f9fcfc4015bb6300ed91fbf719&count=200",
              { lat: position.coords.latitude, lng: position.coords.longitude },
              function (response) {
                  var html = "";
                  $(response.data).each(function (index, value) {
                      html += "<a href='" + this.link + "' target='_blank'><img class='thumbnail' src='" + this.images.thumbnail.url + "' /></a>"
                  });
                  $("#pics").html(html);
              }, 'jsonp');
    }

    return pub;

}(jQuery);;