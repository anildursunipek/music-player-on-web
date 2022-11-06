const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector(".music-controls #prev");
const play = document.querySelector(".music-controls #play");
const next = document.querySelector(".music-controls #next");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const progressBar = document.querySelector(".progress-bar");
const player = new MusicPlayer(musicList);

window.addEventListener("load",() => {
    let music = player.getMusic();
    displayMusic(music);
})

function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img_path;
    audio.src = "mp3/" + music.file_path;
}

play.addEventListener("click",() => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? stopMusic() : playMusic();
    }
);

function playMusic(){
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

function stopMusic(){
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

next.addEventListener("click",() => {
    stopMusic();
    player.next();
    music = player.getMusic();
    displayMusic(music);
})

prev.addEventListener("click",() =>{
    stopMusic();
    player.previous();
    music = player.getMusic();
    displayMusic(music);
})

const calculateTime = (totalSecond) =>{
    let minute = Math.floor(totalSecond / 60) ;
    let second = Math.floor(totalSecond % 60) ;
    second = second < 10 ? `0${second}` : `${second}`;
    return `${minute}:${second}`;
}

audio.addEventListener("loadedmetadata",()=>{
    progressBar.max = Math.floor(audio.duration);
    duration.textContent = calculateTime(audio.duration);
})

audio.addEventListener("timeupdate",() => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(audio.currentTime);
})

progressBar.addEventListener("input",() =>{
    audio.currentTime = progressBar.value; 
})




// TEST CODES

// music = player.getMusic()
// console.log(music);
// console.log(music.getName());

// let music = player.getMusic();
// console.log(player.index)
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(player.index)
// console.log(music.getName());

// player.previous();
// music = player.getMusic();
// console.log(player.index)
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(player.index)
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(player.index)
// console.log(music.getName());

