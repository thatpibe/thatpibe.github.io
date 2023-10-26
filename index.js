document.getElementById("changeColorButton").addEventListener("click", function () {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33f1", "#f1ff33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
