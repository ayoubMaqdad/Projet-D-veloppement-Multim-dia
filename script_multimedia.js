// Set constraints for the video stream


var interval;
var minutes = 0;
var seconds = 10;


function countdown(element) {
    interval = setInterval(function() {
        var el = document.getElementById(element);
        if(seconds == 0) {
            if(minutes == 0) {
                alert(el.innerHTML = "countdown's over!");
                clearInterval(interval);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }
        if(minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }
        var second_text = seconds > 1 ? 'seconds' : 'second';
        el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
        seconds--;
    }, 1000);
}
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

cameraTrigger.onclick = function() {
    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0){
            clearInterval(countdown);
            cameraSensor.width = cameraView.videoWidth;
            cameraSensor.height = cameraView.videoHeight;
            cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
            cameraOutput.src = cameraSensor.toDataURL("image/webp");
            cameraOutput.classList.add("taken");

        }
    }, 1000);

};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);