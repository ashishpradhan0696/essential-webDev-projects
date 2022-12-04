
var replies = document.querySelectorAll("#reply");
replies.forEach(reply => {
    reply.addEventListener('click', (e) => {
        let parentContainer = e.target.closest(".comment__container");
        // console.log(parentContainer);
        let id = parentContainer.id;
        if (id) {
            let childrenContainer = parentContainer.querySelectorAll(`[dataset=${id}]`)
            childrenContainer.forEach(child => child.classList.toggle("opened"));
            console.log(childrenContainer);
        }
    })
})