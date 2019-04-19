var MyCam;
var canvas ;
var btnCapture;
var imcanvas;
var captureFlag = false;

function init(){

    document.getElementById("divs").style.display = "block";

    MyCam = document.getElementById("MyCam");
    canvas = document.getElementById("canvas");
    btnCapture = document.getElementById("btnCapture");
    btnDownload = document.getElementById("enregistrer");

    imcanvas = canvas.getContext("2d");

    btnCapture.addEventListener("click", capture);
    btnDownload.addEventListener("click", enregistrer);
    
    capturer();

}

function capturer(){
    navigator.getUserMedia = (

        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia );

    if(navigator.getUserMedia){

        navigator.getUserMedia({
            video : true,
        }, reussiteCapture, ereurCapture);

    }else{
        var source = document.createElement('source');
        source.setAttribute('src', 'video.mp4');
        MyCam.appendChild(source);
        MyCam.play();
    }

}

function reussiteCapture(stream){
    MyCam.srcObject = stream;
}

function ereurCapture(error){
    console.log("error " + error);
    var source = document.createElement('source');
    source.setAttribute('src', 'video.mp4');
    MyCam.appendChild(source);
    MyCam.play();
}
function enregistrer(){
    var base64 = document.getElementById('canvas').toDataURL("image/jpeg");
    document.getElementById("enregistrer").href=base64;
}
function capture(){

    var seconds = 3;
    var countdown = setInterval(function() {
        document.getElementById("btnCapture").textContent = seconds;
        seconds--;


        if (seconds < 0){

            clearInterval(countdown);
            captureFlag = true;
            imcanvas.drawImage(MyCam, 0, 0, canvas.width, canvas.height);
            var base64 = document.getElementById('canvas').toDataURL("image/png");	//l'image au format base 64
            document.getElementById('tar').value = '';
            document.getElementById('tar').value = base64;
            document.getElementById("btnCapture").textContent = "Recapturer";
            document.getElementById("content").style.display = "inline";
            document.getElementById("download").style.display = "inline";
        }
    }, 1000);
}