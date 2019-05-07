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
     revertBtn = document.getElementById("filt");
    
    revertBtn = document.getElementById("revert-btn");  
    document.getElementById("divs").style.display = "block";
    
    revertBtn = document.getElementById("revert-btn");  
    MyCam = document.getElementById("MyCam");
    canvas = document.getElementById("canvas");
    btnCapture = document.getElementById("btnCapture");
    btnDownload = document.getElementById("enregistrer");
   
    imcanvas = canvas.getContext("2d");

    btnCapture.addEventListener("click", capture);
    // btnDownload.addEventListener("click", enregistrer);
    btnDownload.addEventListener("click", enregistrer);
     revertBtn.addEventListener("click", clearF); 
     
     filt.addEventListener("click", filterr); 
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
       img1.setAttribute('class',"border border-white")
        img1.setAttribute('id',"imgeffets");
        img1.style.filter = "none" ;
        content.replaceChild(img1, img2); 

}
function transform(id){

    img2 = document.getElementById("imgeffets");
    const imgUrl = img2.src;

    // create image element

    const img1 = document.createElement('img');
   
    // set img src

    img1.setAttribute('src',imgUrl);
 
    img1.setAttribute('class',"border border-white")
    img1.setAttribute('id',"imgeffets");
        switch(id){
            case "grayscale" : {
                
                
                img1.style.filter = " grayscale(100%)" ;
                break;
            }
            case "sepia" : {
                
                img1.style.filter = "sepia(100%)" ;
                break;
            }
            case "invert" : {
                
                img1.style.filter += "saturate("+val1+"%) sepia("+val2+"%) contrast("+val+"%) brightness(" + val4 + "%)" ;
                break;
            }
            case "hue-rotate" : {
            
                
                img1.style.filter += " saturate("+val1+"%) sepia("+val2+"%) contrast("+val3+"%) brightness(" + val + "%)" ;
                break;				
            }
           
        } 
        content.replaceChild(img1, img2); 

}


// event to clear out the photos


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
            /* document.getElementById("content").style.display = "block";
             document.getElementById("download").style.display = "inline"; */
       

       

        // img.style.filter = filter;

        
        }
    }, 1000);
}


function filterr(){
    document.getElementById("content").style.display = "block";
 
    img2 = document.getElementById("imgeffets");
    const imgUrl = canvas.toDataURL('image/png');
    const img1 = document.createElement('img');
       
        // set img src

        img1.setAttribute('src',imgUrl);
       img2 = document.getElementById("imgeffets");
       img1.setAttribute('class',"border border-white")
        img1.setAttribute('id',"imgeffets");
       
        
        content.replaceChild(img1, img2); 

}

    
       

       

        


function filtercanvas(id,val) {
    
    
    
    img2 = document.getElementById("imgeffets");
    let val1 = parseFloat(document.getElementById('saturation').value );
    let val2 = parseFloat(document.getElementById('sepia').value );
    let val3 = parseFloat(document.getElementById('contrast').value );
    let val4 = parseFloat(document.getElementById('luminance').value );
   
    
 
           
             
            const imgUrl = img2.src;

        // create image element

        const img1 = document.createElement('img');
       
        // set img src

        img1.setAttribute('src',imgUrl);
     
        img1.setAttribute('class',"border border-white")
        img1.setAttribute('id',"imgeffets");
        switch(id){
            case "saturation" : {
                
                
                img1.style.filter += " saturate("+val+"%) sepia("+val2+"%) contrast("+val3+"%) brightness(" + val4 + "%)" ;
                break;
            }
            case "sepia" : {
                
                img1.style.filter += " saturate("+val1+"%) sepia("+val+"%) contrast("+val3+"%) brightness(" + val4+ "%)" ;
                break;
            }
            case "contrast" : {
                
                img1.style.filter += "saturate("+val1+"%) sepia("+val2+"%) contrast("+val+"%) brightness(" + val4 + "%)" ;
                break;
            }
            case "luminance" : {
            
                
                img1.style.filter += " saturate("+val1+"%) sepia("+val2+"%) contrast("+val3+"%) brightness(" + val + "%)" ;
                break;				
            }
           
        } 
        
        content.replaceChild(img1, img2); 
        
       
    
   
      
    
   
    
}