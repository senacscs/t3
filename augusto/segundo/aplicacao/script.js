function initMap() {
    var mapOptions = {
        center: { lat: -23.550520, lng: -46.633308 }, 
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var locais = [
        {lat: -23.550520, lng: -46.633308, title: 'Local 1'},
        {lat: -23.559616, lng: -46.658028, title: 'Local 2'},
        {lat: -23.548943, lng: -46.638818, title: 'Local 3'}
    ];

    locais.forEach(function(local) {
        var marker = new google.maps.Marker({
            position: {lat: local.lat, lng: local.lng},
            map: map,
            title: local.title
        });
    });
}