Array.from(document.querySelectorAll(".navigation-btn")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

Array.from(document.querySelectorAll(".navigation-btn-back")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});