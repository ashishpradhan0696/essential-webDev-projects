
var rating = document.getElementById("rating");

//calling the initialUpdate() when the page is loaded. 
initialUpdate();

//This function fetches the last saved rating data from localstorage and displays the star rating for the products even upon reload of the page
//Only required if you want to persist the last saved data.
function initialUpdate() {
    let initialXRRating = localStorage.getItem("iPhoneXR");
    let initial12Rating = localStorage.getItem("iPhone12");
    let initial13Rating = localStorage.getItem("iPhone13");
    let xr_star = document.getElementsByClassName("xr_star");
    let iphone12_star = document.getElementsByClassName("12_star");
    let iphone13_star = document.getElementsByClassName("13_star");
    for (let i = 0; i < initialXRRating; i++) {
        xr_star[i].classList.replace("fa-regular", "fa-solid");

    }
    for (i = 0; i < initial12Rating; i++) {
        iphone12_star[i].classList.replace("fa-regular", "fa-solid");
    }
    for (i = 0; i < initial13Rating; i++) {
        iphone13_star[i].classList.replace("fa-regular", "fa-solid");
    }

}

//updates star rating based on rating value selected
function updateStar() {
    let phone = document.getElementById("phone").value;
    let xr_star = document.getElementsByClassName("xr_star");
    let iphone12_star = document.getElementsByClassName("12_star");
    let iphone13_star = document.getElementsByClassName("13_star");
    //highlights(gold color) the no. of stars based on rating value selected
    for (let i = 0; i < rating.value; i++) {
        if (phone == "iPhoneXR") {
            xr_star[i].classList.replace("fa-regular", "fa-solid");
        }
        else if (phone == "iPhone12") {
            iphone12_star[i].classList.replace("fa-regular", "fa-solid");
        }
        else if (phone == "iPhone13") {
            iphone13_star[i].classList.replace("fa-regular", "fa-solid");
        }
    }
    //Replaces the rest of the stars with a regular star(un-highlighted)
    for (let i = rating.value; i < xr_star.length; i++) {
        if (phone == "iPhoneXR") {
            xr_star[i].classList.replace("fa-solid", "fa-regular");
        }
        else if (phone == "iPhone12") {
            iphone12_star[i].classList.replace("fa-solid", "fa-regular");
        }
        else if (phone == "iPhone13") {
            iphone13_star[i].classList.replace("fa-solid", "fa-regular");
        }
    }


}

//event listener "rating" listens to any change in the rating value and calls updateStar() upon any change, which then increases or decreases the no. of star ratings for the selected product
rating.addEventListener("change", updateStar);

//function to save the star ratings in local storage
function save() {
    let phone = document.getElementById("phone").value;
    let rating = document.getElementById("rating").value;
    if (phone == "iPhoneXR") {
        localStorage.setItem("iPhoneXR", rating);
    }
    else if (phone == "iPhone12") {
        localStorage.setItem("iPhone12", rating);
    }
    else {
        localStorage.setItem("iPhone13", rating);
    }
}