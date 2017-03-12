function Movie(name, duration){
	Media.call(this, name, duration)
}

Movie.prototype = Object.create(Media.prototype)

Movie.prototype.constructor = Movie;
