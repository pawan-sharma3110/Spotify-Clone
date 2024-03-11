var songIndex = 0;
var audioElement = new Audio("songs/1.mp3");
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
var songs =[
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},


];
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
    } else {
        audioElement.pause();
        masterPlay.innerHTML = "Play"; // Change button text to "Play"
    }
});

// Listner to event
myProgressBar.addEventListener('timeupdate', ()=>{
console.log('timeupdate')
});