
const slide = document.querySelector(".page");
const nextBtnOne = document.querySelector(".nextBtn-1");
const nextBtnTwo = document.querySelector(".nextBtn-2");
const prevBtnTwo = document.querySelector(".prevBtn-2");
const nextBtnThree = document.querySelector(".nextBtn-3");
const prevBtnThree = document.querySelector(".prevBtn-3");
const submitBtn = document.querySelector(".submitBtn");
const prevBtnFour = document.querySelector(".prevBtn-4");

const steps = document.querySelectorAll(".steps");
const stepIcon = document.querySelectorAll(".fa");
const confirm = document.querySelector(".confirm");


nextBtnOne.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-100%";
    steps[0].classList.toggle("active");
    stepIcon[0].classList.remove("fa-times");
    stepIcon[0].classList.add("fa-check");

})

nextBtnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-200%";
    steps[1].classList.toggle("active");
    stepIcon[1].classList.remove("fa-times");
    stepIcon[1].classList.add("fa-check");

})

nextBtnThree.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-300%";
    steps[2].classList.toggle("active");
    stepIcon[2].classList.remove("fa-times");
    stepIcon[2].classList.add("fa-check");

})


prevBtnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-0%";
    steps[0].classList.toggle("active");
    stepIcon[0].classList.add("fa-times");
    stepIcon[0].classList.remove("fa-check");
})

prevBtnThree.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-100%";
    steps[1].classList.toggle("active");
    stepIcon[1].classList.add("fa-times");
    stepIcon[1].classList.remove("fa-check");
})

prevBtnFour.addEventListener('click', (e) => {
    e.preventDefault();
    slide.style.marginLeft = "-200%";
    steps[2].classList.toggle("active");
    stepIcon[2].classList.add("fa-times");
    stepIcon[2].classList.remove("fa-check");

})

confirm.addEventListener('click', () => {
    steps[3].classList.toggle("active");
    if (stepIcon[3].classList.contains("fa-times")) {
        stepIcon[3].classList.remove("fa-times");
        stepIcon[3].classList.add("fa-check");
    }
    else {
        stepIcon[3].classList.add("fa-times");
        stepIcon[3].classList.remove("fa-check");
    }


})

submitBtn.addEventListener('click', (e) => {
    // alert("You have successfully signed up");
    let form = document.forms.myForm;   //myForm is the id of the form
    let formData = new FormData(form);

    let formObject = {
        FirstName: formData.get("fname"),
        LastName: formData.get("lname"),
        Email: formData.get("userEmail"),
        PhoneNumber: formData.get("phoneNumber"),
        DateOfBirth: formData.get("dob"),
        PlaceOfBirth: formData.get("pob"),
    }

    alert(JSON.stringify(formObject));
})
