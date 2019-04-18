var MyCam;
var canvas ;
var btnCapture;
var imcanvas;
var captureFlag = false;

function watch_video(){

    document.getElementById("divs").style.display = "block";

    MyCam = document.getElementById("MyCam");
    canvas = document.getElementById("canvas");
    btnCapture = document.getElementById("btnCapture");


    imcanvas = canvas.getContext("2d");

    btnCapture.addEventListener("click", capture);


    navigator.getUserMedia = (

        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia );

    if(navigator.getUserMedia){

        navigator.getUserMedia({
            video : true,
        }, SuccessCapture, ErrorCapture);

    }else{
        var source = document.createElement('source');
        source.setAttribute('src', 'video.mp4');
        MyCam.appendChild(source);
        MyCam.play();
    }

}

function SuccessCapture(stream){
    MyCam.srcObject = stream;
}

function ErrorCapture(error){
    console.log("error " + error);
    var source = document.createElement('source');
    source.setAttribute('src', 'video.mp4');
    MyCam.appendChild(source);
    MyCam.play();
}

function capture(){
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0){
            clearInterval(countdown);
            captureFlag = true;
            imcanvas.drawImage(MyCam, 0, 0, canvas.width, canvas.height);
            var base64 = document.getElementById('canvas').toDataURL("image/png");	//l'image au format base 64
            document.getElementById('tar').value = '';
            document.getElementById('tar').value = base64;
        }
    }, 1000);

}