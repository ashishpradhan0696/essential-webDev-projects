let accordion = document.querySelectorAll(".accordion");
accordion.forEach(data => {
    console.log(data);
    data.addEventListener('click', (e) => {
        console.log(e.target);
        let header = e.target.closest(".accordion-header");
        let icon = header.querySelector(".fa");
        let parent = header.closest(".accordion");
        let summary = parent.querySelector(".accordion-summary");
        summary.classList.toggle("open");
        if (summary.classList.contains("open")) {
            icon.classList.remove("fa-arrow-down");
            icon.classList.add("fa-arrow-right");
        }
        else {
            icon.classList.add("fa-arrow-down");
            icon.classList.remove("fa-arrow-right");
        }
    })
})

