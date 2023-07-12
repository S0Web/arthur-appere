import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'

// const source = "assets/js/audio.js";
const playBtn = document.getElementById("playBtn")
const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#11934d',
  progressColor: '#18D26E',
  barWidth: 4,
  responsive: true,
  height: 90,
  barRadius: 4
})

wavesurfer.load("assets/audios/medias/1.wav");

playBtn.onclick = function(){
  wavesurfer.playPause();
  if(playBtn.src.includes("play.png")){
    playBtn.src = "assets/audios/boutons/pause.png";
  } else {
    playBtn.src = "assets/audios/boutons/play.png"
  }
  }

  wavesurfer.on('finish', function(){
    playBtn.src = "media/play.png";
    wavesurfer.stop();
  })