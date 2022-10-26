

const stars = document.querySelectorAll("i");
var index = parseInt(localStorage.getItem("stars"));
console.log("initial star", index);
for (let i = 0; i <= index - 1; i++) {
    stars[i].classList.remove("fa-star-o");
    stars[i].classList.add("fa-star");
}

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
        index = i;
        for (let k = 0; k <= stars.length; k++) {
            while (k <= index) {
                stars[k].classList.remove("fa-star-o");
                stars[k].classList.add("fa-star");
                k++;
            }
            while (k > index && k < stars.length) {
                stars[k].classList.add("fa-star-o");
                stars[k].classList.remove("fa-star");
                k++
            }
        }
    })
}

const save = () => {

    localStorage.setItem("stars", index + 1);
    console.log("total stars", localStorage.getItem("stars"));
}





