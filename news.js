const cursor = document.querySelector(".cursor");
        var timeout;
        //Follow cursor
        document.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";

            //mouse stop
            function mouseStopped(){
                cursor.style.display = "none"
            }
            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 3000)
        });
        //Stop following cursor
        document.addEventListener("mouseout",() => {
            cursor.style.display = "none";
        })


//reveal on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//video player

let videoPlaying = false;
function toggleVideo(){
    const image = document.getElementById('image');
    const VideoPlayer = document.getElementById('videoPlayer');
    const button = document.getElementById('toggleButton');
    
    if (videoPlaying){
        VideoPlayer.pause();
        VideoPlayer.style.display = 'none';
        image.style.display = 'inline';
        button.innerText = 'Check out Spoiler';
        videoPlaying = false;
    }
    else{
        VideoPlayer.play();
        VideoPlayer.style.display = 'inline';
        image.style.display = 'none';
        button.innerText = 'Stop Spoiler';
        videoPlaying = true;
    }
}
function toggleVideo2(){
    const image = document.getElementById('image2');
    const VideoPlayer = document.getElementById('videoPlayer2');
    const button = document.getElementById('toggleButton2');
    
    if (videoPlaying){
        VideoPlayer.pause();
        VideoPlayer.style.display = 'none';
        image.style.display = 'inline';
        button.innerText = 'Check out Spoiler';
        videoPlaying = false;
    }
    else{
        VideoPlayer.play();
        VideoPlayer.style.display = 'inline';
        image.style.display = 'none';
        button.innerText = 'Stop Spoiler';
        videoPlaying = true;
    }
}
function toggleVideo3(){
    const image = document.getElementById('image3');
    const VideoPlayer = document.getElementById('videoPlayer3');
    const button = document.getElementById('toggleButton3');
    
    if (videoPlaying){
        VideoPlayer.pause();
        VideoPlayer.style.display = 'none';
        image.style.display = 'inline';
        button.innerText = 'Check out Spoiler';
        videoPlaying = false;
    }
    else{
        VideoPlayer.play();
        VideoPlayer.style.display = 'inline';
        image.style.display = 'none';
        button.innerText = 'Stop Spoiler';
        videoPlaying = true;
    }
}
function toggleVideo4(){
    const image = document.getElementById('image4');
    const VideoPlayer = document.getElementById('videoPlayer4');
    const button = document.getElementById('toggleButton4');
    
    if (videoPlaying){
        VideoPlayer.pause();
        VideoPlayer.style.display = 'none';
        image.style.display = 'inline';
        button.innerText = 'Check out Spoiler';
        videoPlaying = false;
    }
    else{
        VideoPlayer.play();
        VideoPlayer.style.display = 'inline';
        image.style.display = 'none';
        button.innerText = 'Stop Spoiler';
        videoPlaying = true;
    }
}