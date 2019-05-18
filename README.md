# Projet-D-veloppement-Multim-dia
’un module permettant de capturer la photo de l’utilisateur pour pouvoir l’ajouter à son profile. Ce module sera utilisable dans les applications Web, Mobiles hybrides et Desktop basées sur les technologies WEB.


1. L’utilisateur appuie sur le bouton « photo »
![2](https://user-images.githubusercontent.com/46140016/57963369-8f822c80-7923-11e9-860f-a134dd7c1bc4.PNG)
2. On affiche l’interface qui contient une « vidéo » et le bouton « capturer ». La vidéo affiche la
sortie de la caméra de l’utilisateur. Si le dispositif de l’utilisateur n’a pas de caméra, on affiche et
on démarre une petite video en boucle.
![5](https://user-images.githubusercontent.com/46140016/57963426-4c748900-7924-11e9-84a0-3a9fa0e78d12.PNG)

3. Quand l’utilisateur appuie sur le bouton « capturer », on affiche un compte à rebour (Count
down) de 3 secondes au terme duquel on capture l’image. (On l’affiche)

![3](https://user-images.githubusercontent.com/46140016/57963383-cf491400-7923-11e9-8082-0dd23bb6d76d.PNG)
![4](https://user-images.githubusercontent.com/46140016/57963397-07e8ed80-7924-11e9-98d0-70e71c47e1fd.PNG)

 4. un ensemble de boutons permettant d’ajuster les réglages de l’image capturée. Un bouton
« enregistrer » permettra l’enregistrement de l’image finalisée.

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


![6](https://user-images.githubusercontent.com/46140016/57963452-9cebe680-7924-11e9-9f9a-198bc03f18fb.PNG)

5. Ajouter un dispositif de recadrage de l’image capturée :

![7](https://user-images.githubusercontent.com/46140016/57963498-3915ed80-7925-11e9-946c-720006e25f9d.PNG)




