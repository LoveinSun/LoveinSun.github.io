const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   #吸底模式
    autoplay: false,  #自动播放
    audio: [
	 {
		name: 'Five Hundred Miles',
		artist: 'Justin Timberlake',
		url: 'music.mp3',
		cover: '?',
	    lrc: '' #歌词播放并不好看，所以没有使用
	 },
    ]
});
