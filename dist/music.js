const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: false, 
    audio: [
	 {
		name: 'Five Hundred Miles',
		artist: 'Justin Timberlake',
		url: 'music.flac',
		cover: 'images/cover.jpg',
	    lrc: '' 
	 },
    ]
});
