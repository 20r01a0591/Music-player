
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Arrangi Yaari-(2015)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Image Dragons-Believer", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chaand Baaliyan-Aditya A", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kadalalle-Aishwarya Ravichandran", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kholo Kholo-Taare Zameen Par", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Nee Neeli Kannullona('from Dear Comrade')", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Scars To Your Beautiful", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tera Yaar Hoon Main", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Teri Mitti-Kesari", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Woh Din(Arijit Singh Version)", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
masterSongName.innerText = songs[songIndex].songName;
songItems.forEach((element, i)=>{ 
   // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
       // masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
       // element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

       /* let songtitles=songs.filter((els)=>{
          return els.id==index+1;
        })
        songtitles.forEach(elss=>{
          let {SongName=elss;
          }
        })*/
      })
    })

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   // updatePlayIcons();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   // updatePlayIcons();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function search() {
  let input = document.getElementById("searchbar").value;
  input=input.toLowerCase();
  let x = document.getElementsByClassName('songName');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].parentNode.style.display="none";
      }
      else {
          x[i].parentNode.style.display="block";                 
      }
  }
}
//queue button

let queue1=document.getElementById("queue");
let isRed=0;
queue1.addEventListener("click",function(){
   isRed++;
    if(isRed%2===1){
        queue1.classList.add(queue1.style.color="red");
       // audioElement.play();
    }
    else {
        queue1.classList.add(queue1.style.color="white");
        
    }
})

