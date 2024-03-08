//reveal on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const slider = document.querySelector('.slider');

const activateSlider = (event) => {
    const items = document.querySelectorAll('.item');

    if(event.target.classList.contains('next')){
        slider.append(items[0]);
    }
    else if(event.target.classList.contains('prev')){
        slider.prepend(items[items.length -1]);
    }
};

document.addEventListener('click', activateSlider, false);

//cursor
const cursor = document.querySelector(".cursor");
var timeout;
//Follow cursor
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //mouse stop
    function mouseStopped(){
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000)
});
//Stop following cursor
document.addEventListener("mouseout",() => {
    cursor.style.display = "none";
});
