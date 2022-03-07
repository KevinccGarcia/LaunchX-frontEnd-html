let myImage = document.querySelector('#front');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pasteleriaFrente.png'){
        myImage.setAttribute ('src','images/PasteleriaSide.png');
    } else {
        myImage.setAttribute ('src', 'images/pasteleriaFrente.png');
    }

}


$(document).ready(function () {
    var HeightDiv = $("div").height();
    var HeightTable = $("table").height();
    if (HeightTable > HeightDiv) {
        var FontSizeTable = parseInt($("table").css("font-size"), 10);
        while (HeightTable > HeightDiv && FontSizeTable > 5) {
            FontSizeTable--;
            $("table").css("font-size", FontSizeTable);
            HeightTable = $("table").height();
        }
    }
});