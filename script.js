function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 34.66767774804736,
			lng: 135.43076145097373,
		},
		zoom: 18,
		mapId: 'MAP ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

    // Markers
    const markers = [
		["Yoshi's House", 34.66669734177897, 135.4309054875526, 'utils/yoshi_house.svg', 38, 31,],
		['Current Location', 34.66767112713121, 135.4297887322531, 'utils/pointer.svg', 30, 47.8,],
		['Ghost House', 34.66832715150856, 135.43292762674864, 'utils/ghosthouse.svg', 40, 48,],
		['Ghost House', 34.668178015795654, 135.43411204972494, 'utils/ghosthouse.svg', 40, 48,],
		['Castle', 34.66775608022106, 135.43139547897843, 'utils/castle.svg', 40, 53],
		['Castle', 34.6673125731021, 135.4341350319253, 'utils/castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, 'utils/pipe.svg', 38, 42.5],
		['Warp Pipe', 34.66711169120737, 135.43656819078763, 'utils/pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'utils/star.svg', 38, 38],
		['Donut Plains', 34.66830355359945, 135.4320565322381, 'utils/hill_with_eyes.svg', 50, 60.7,],
		['Donut Plains', 34.66829411443392, 135.43231361996433, 'utils/hill_with_eyes.svg', 50, 60.7,],
		['Donut Plains', 34.6683781779677, 135.43217016043528, 'utils/hill_with_eyes.svg', 50, 60.7,],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		// create a marker on the map - more info at google.maps.Icon
		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		// add in info window
		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('mouseover', () => {
			infowindow.open(map, marker);
		});

		marker.addListener('mouseout', () => {
			infowindow.close(map, marker);
		});
	}
}
