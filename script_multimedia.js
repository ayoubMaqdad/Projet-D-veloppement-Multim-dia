

	var range;
	var MyCam;
	var canvas ;
	var btnCapture;
	var imcanvas;
	var captureFlag = false;
  var imgg1;
  var imgg2;
  var range;


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
        range=document.querySelectorAll('input[type=range]');
		btnCapture.addEventListener("click", capture);
		// btnDownload.addEventListener("click", enregistrer);
        btnDownload.addEventListener("click", enregistrer);
        
		 revertBtn.addEventListener("click", clearF); 
		 
		 filt.addEventListener("click", filterr); 
		capturer();

    }
    function getOffset( el ) {
        var _x = 0; 
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
	
	function cropphoto(){

            	
            //img1 = document.createElement("img");
            //img1.src =  document.getElementById('canvas').toDataURL("image/jpeg");
            
			var destW = 480;
			var destH = 320;
			var destX = 0;
            var destY = 0;
            
            var sourceCX = getOffset(document.getElementById('canva')).left;
            var sourceCY = getOffset(document.getElementById('canva')).top;
            var sourceX = document.getElementById('resizable').offsetLeft;
            console.log(sourceX);
            var sourceY = document.getElementById('resizable').offsetTop;
        
            console.log(sourceY);
			var sourceW = document.getElementById('resizable').offsetWidth;
            console.log(sourceCY);
			var sourceH = document.getElementById('resizable').offsetHeight;
           //900 300 t 300 l 900
            console.log(sourceCX);
            imcanvas.clearRect(0, 0, canvas.width, canvas.height);
            imcanvas.drawImage(imgg1, sourceX-sourceCX, sourceY-sourceCY, sourceW, sourceH, destX, destY, destW, destH);
         
			imgg1.src =  document.getElementById('canvas').toDataURL("image/jpeg", 1.0);
			
            
           
            canvas.prepend(imgg1);

            
        
          
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
   
  
    
    var base64 = document.getElementById('canvas').toDataURL("image/jpeg");
    document.getElementById("enregistrer").href=base64;
    
    
        

        

}
function clearF(){

    imcanvas.filter = "none";
    //imcanvas.filter="contrast(240%)";
    imcanvas.drawImage(imgg1, 0, 0, canvas.width, canvas.height);
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

            imgg1 = document.createElement("img");
			imgg1.src =  document.getElementById('canvas').toDataURL("image/jpeg", 1.0);
			
            imgg2 = document.createElement("img");
             imgg2=Object.assign({},imgg1);
           
            canvas.prepend(imgg1);
            document.getElementById("resizable").style.display = "block";
            document.getElementById("btnCapture").textContent = "Recapturer";
            /* document.getElementById("content").style.display = "block";
             document.getElementById("download").style.display = "inline"; */
       

       

        // img.style.filter = filter;

        
        }
    }, 1000);
}


function filterr(){
    document.getElementById("content").style.display = "block";
 
   
}

    
       

    

function filter() {
    
    
    
 
    var computedFilters = '';
    var r = document.querySelectorAll('input[type=range]');
    r.forEach(function(item, index){
        computedFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';

    });
    
    imcanvas.filter = computedFilters;
    //imcanvas.filter="contrast(240%)";
    imcanvas.drawImage(imgg1, 0, 0, canvas.width, canvas.height);
      
    
   
    
}
