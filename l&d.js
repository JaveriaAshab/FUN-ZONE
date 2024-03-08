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

//visible on scroll

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