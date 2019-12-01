var i = 0;
var images = [];
var time = 5000;

// Image List
images[0] = './Photos/IceCreamAssorted.jpg'
images[1] = './Photos/Smoothies.jpeg'
images[2] = './Photos/Elote.jpg'

// Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;