function Song(name, artist, duration){
	this.artist = artist;
	Media.call(this,name, duration)
}

Song.prototype = Object.create(Media.prototype)

Song.prototype.constructor = Song;
