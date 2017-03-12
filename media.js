function Media(name, duration){
	this.name = name;
	this.duration = duration;
	this.isPlaying = false;
}


Media.prototype.play = function(){
	this.isPlaying = true;
}

Media.prototype.stop = function(){
	this.isPlaying = false;
}