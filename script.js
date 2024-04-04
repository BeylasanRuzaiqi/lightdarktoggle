document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".container");
    let toggle = document.getElementById("toggle");

    toggle.addEventListener('click', e => {
        if (toggle.checked) {
            container.style.backgroundColor = "#202838"; 
        } else {
            container.style.backgroundColor = "#ffe082";
        }
    });
});