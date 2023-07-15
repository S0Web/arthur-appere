var audioPlayers = document.getElementsByClassName("audio-player");

// Parcourez tous les éléments audio avec la classe "audio-player" et ajoutez des gestionnaires d'événements
for (var i = 0; i < audioPlayers.length; i++) {
  audioPlayers[i].addEventListener("play", stopOtherAudios);
}

function stopOtherAudios(event) {
  var currentAudio = event.target;
  
  // Parcourez tous les éléments audio avec la classe "audio-player" et arrêtez leur lecture sauf l'audio en cours
  for (var i = 0; i < audioPlayers.length; i++) {
    if (audioPlayers[i] !== currentAudio) {
      audioPlayers[i].pause();
      audioPlayers[i].currentTime = 0;
    }
  }
}





// import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'

// // const source = "assets/js/audio.js";
// const playBtn = document.getElementById("playBtn")
// const wavesurfer = WaveSurfer.create({
//   container: '#waveform',
//   waveColor: '#11934d',
//   progressColor: '#18D26E',
//   barWidth: 4,
//   responsive: true,
//   height: 90,
//   barRadius: 4
// })

// wavesurfer.load("assets/audios/medias/1.wav");

// playBtn.onclick = function(){
//   wavesurfer.playPause();
//   if(playBtn.src.includes("play.png")){
//     playBtn.src = "assets/audios/boutons/pause.png";
//   } else {
//     playBtn.src = "assets/audios/boutons/play.png"
//   }
//   }

//   wavesurfer.on('finish', function(){
//     playBtn.src = "media/play.png";
//     wavesurfer.stop();
//   })