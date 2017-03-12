var myMusic = new Playlist('Hannah Playlist',
	[
		new Song("Here Comes the Sun","The Beatles","2:54"),
		new Song("Walking On Sunshine","Katrina and the Waves","3:43"),
		new Movie("Inception", "100:30")
	]);


var music = {
	init: function(){
		$("#playListName").text(myMusic.name)
		var isArtist = "";
		for(var i=0;i<myMusic.songs.length;i++){
			isArtist = (myMusic.songs[i].constructor.name == "Song")?(" - "+ myMusic.songs[i].artist):"";
			$("#playlist").append("<li>" + myMusic.songs[i].name + isArtist +"<span class='duration'>"+ myMusic.songs[i].duration +"</span></li>");
		}
		//click
		$("#play").click(function(){
			myMusic.play();
			$("#playlist li").eq(myMusic.nowPlayingIndex).addClass('current')
		})
		$("#next").click(function(){
			myMusic.next();
			$("#playlist li").removeClass('current').eq(myMusic.nowPlayingIndex).addClass('current')
		})
		$("#stop").click(function(){
			myMusic.stop();
			$("#playlist li").removeClass('current');
		})
	}
}
music.init();
