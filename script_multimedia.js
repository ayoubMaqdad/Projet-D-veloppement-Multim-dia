var filter="none";
var MyCam;
var canvas ;
var btnCapture;
var imcanvas;
var captureFlag = false;
const clearButton = document.getElementById('clear-button');
    
    const photoFilter = document.getElementById('photo-filter');
function init(){
     downloadBtn = document.getElementById("download-btn");

    revertBtn = document.getElementById("revert-btn");  
    document.getElementById("divs").style.display = "block";
    
    MyCam = document.getElementById("MyCam");
    canvas = document.getElementById("canvas");
    btnCapture = document.getElementById("btnCapture");
    btnDownload = document.getElementById("enregistrer");

    imcanvas = canvas.getContext("2d");

    btnCapture.addEventListener("click", capture);
    // btnDownload.addEventListener("click", enregistrer);
    btnDownload.addEventListener("click", enregistrer);
     revertBtn.addEventListener("click", clearF); 
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
// function enregistrer(){
//     var base64 = document.getElementById('canvas').toDataURL("image/jpeg");
//     document.getElementById("enregistrer").href=base64;
// }
function enregistrer(){
    imgg = document.getElementById("imgeffets");
    imcanvas.filter= imgg.style.filter;
    imcanvas.drawImage(imgg, 0, 0, canvas.width, canvas.height);
    var base64 = document.getElementById('canvas').toDataURL("image/jpeg");
    document.getElementById("enregistrer").href=base64;
    
    imcanvas.filter= "none";
    imcanvas.drawImage(imgg, 0, 0, canvas.width, canvas.height);
        

        

}
function clearF(){

    img2 = document.getElementById("imgeffets");
   
    

    
   
            const imgUrl = canvas.toDataURL('image/png');

        // create image element

        const img1 = document.createElement('img');
       
        // set img src

        img1.setAttribute('src',imgUrl);
       img2 = document.getElementById("imgeffets");
      
        img1.setAttribute('id',"imgeffets");
        img1.style.filter = "none" ;
        content.replaceChild(img1, img2); 

}
photoFilter.addEventListener('change',function(e){

    filter = e.target.value;

    img.style.filter = filter;

    e.preventDefault();

});

// event to clear out the photos

clearButton.addEventListener('click',function(e){

     photos.innerHTML = '';
     filter = 'none';

     imgg.style.filter = filter;

     photoFilter.selectedIndex=0;

});
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
            // document.getElementById('tar').value = '';
            // document.getElementById('tar').value = base64;
            document.getElementById("btnCapture").textContent = "Recapturer";
            document.getElementById("content").style.display = "block";
             document.getElementById("download").style.display = "inline";
       

       

        // img.style.filter = filter;

        
        }
    }, 1000);
}

function filtercanvas( val) {
    
    
   
    img2 = document.getElementById("imgeffets");
    let val1 = parseFloat(document.getElementById('saturation').value );
    

    
           
             
            const imgUrl = canvas.toDataURL('image/png');

        // create image element

        const img1 = document.createElement('img');
       
        // set img src

        img1.setAttribute('src',imgUrl);
       img2 = document.getElementById("imgeffets");
      
        img1.setAttribute('id',"imgeffets");
        img1.style.filter = "contrast("+val1+"%)" ;
        content.replaceChild(img1, img2); 
        
       
    
   
      
    
   
    
}