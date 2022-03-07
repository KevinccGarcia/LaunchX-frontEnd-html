let myImage = document.querySelector('#front');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pasteleriaFrente.png'){
        myImage.setAttribute ('src','images/PasteleriaSide.png');
    } else {
        myImage.setAttribute ('src', 'images/pasteleriaFrente.png');
    }

}
