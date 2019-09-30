{
    let image = document.getElementsByClassName("carousel__sprite")[0],
        button_first = document.getElementsByClassName("button")[0],
        button_second = document.getElementsByClassName("button")[1],
        secondCarousel = document.getElementById("interval__sprite");

    button_first.onclick = () => moveCarousel(133, "next", image);
    button_second.onclick = () => moveCarousel(133, "prev", image);



    setInterval(function () {
        moveCarousel(133, "next", secondCarousel);
    }, 4500);



    let counter = 0;

    function moveCarousel(value, direction, selector) {
        if (direction === "next") {
            if (counter === (value * -2)) counter = value;
            selector.style.transform = `translateX(${counter -= value}px)`;

        } else if (direction === "prev") {
            if (counter === 0) counter = (value * -3);
            selector.style.transform = `translateX(${counter += value}px)`;
        }
    }
}