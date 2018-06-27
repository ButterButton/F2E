const Flickrapi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


$.ajax({
    url: Flickrapi,
    dataType: 'jsonp',
    data: { format: "json" },
    success: function(data) {
        console.log(data); //formatted JSON data
    }
});



