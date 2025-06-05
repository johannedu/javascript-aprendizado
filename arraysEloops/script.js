var videoGames = ['Switch', 'PS4', 'XBox'];

for (var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4'){
        break
    }

}

var i = 0;

while (i < 10){
    console.log(i);
    i++;
}

videoGames.forEach (function(j){
    console.log (j);
})


