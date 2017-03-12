function Playlist(name, songs){
	this.name = name;
	this.songs = songs;
	this.nowPlayingIndex = 0;
}

Playlist.prototype.play = function(){
	return this.songs[this.nowPlayingIndex].play();
}

Playlist.prototype.stop = function(){
	return this.songs[this.nowPlayingIndex].stop();
}

Playlist.prototype.next = function(){
	this.stop();
	this.nowPlayingIndex++;
	if(this.nowPlayingIndex===(this.songs.length)){
		this.nowPlayingIndex = 0;
	}
	this.play();
}