var songIndex = 0;
var gif = document.getElementById('gif');
var audioElement = new Audio("songs/1.mp3");
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
var songItems = Array.from(document.getElementsByClassName('songName'));
var songs =[
{songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
{songName: "Ishq-rishk", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
{songName: "Sanam-re", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
{songName: "Tera-fitoor", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
{songName: "Sanam-teri-kasam", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
{songName: "Qismat", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
{songName: "Struglear", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
{songName: "Love-me-like-do", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
{songName: "A-man-without-love", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
{songName: "Majboriyan", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},

];


masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.innerHTML = "pause";
        gif.style.opacity="5";
    } else {
        audioElement.pause();
        masterPlay.innerHTML = "play_arrow"; // Change button text to "Play"
        gif.style.opacity="0";
    }
});

// Listner to event
audioElement.addEventListener('timeupdate', ()=>{
    var duration = audioElement.duration;
    var currentTime = audioElement.currentTime;
    var progress = (currentTime / duration) * 100;
    // Update progress bar
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
audioElement.play();
masterPlay.innerHTML = "pause";
gif.style.opacity="5";
})



var makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.innerHTML="play_arrow";
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target;
    })
})