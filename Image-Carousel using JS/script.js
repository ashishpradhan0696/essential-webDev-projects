console.log("hello");

var index = 0;
var images = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");
console.log(dots);
images[0].style.display = "block";
dots[0].classList.add("active");

function showImage(i) {
    index += i;
    var j = 0;
    for (j = 0; j < images.length; j++) {
        if (j != index) {
            images[j].style.display = "none";
            dots[j].classList.remove("active");
        }

    }

    if (index > images.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].classList.add("active");

}
