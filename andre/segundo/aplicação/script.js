let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.55052, lng: -46.633308 },
        zoom: 12,
    });

    const locations = [
        { lat: -23.55052, lng: -46.633308, title: "Lugar 1" },
        { lat: -23.55132, lng: -46.638308, title: "Lugar 2" },
        { lat: -23.54852, lng: -46.628308, title: "Lugar 3" }
    ];

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<h3>${location.title}</h3>`
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });
}
