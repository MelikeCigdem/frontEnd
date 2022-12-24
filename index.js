ele = document.getElementById("btn");
ele.addEventListener("click", function () {
    console.log("dgdgsdg")
    ele.classList.add("active");
});

var evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
        /* whatever properties you want to give it */
    }),
    ele = document.getElementById("btn");
ele.dispatchEvent(evt);