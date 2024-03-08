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



const cards = document.querySelectorAll(".SevenItz .cards");
let counter = 0;

function left(){
    if(counter === 0) {
        counter = 6;
    } else {
        counter--;
    }
    scroll();
}

function right(){
    if(counter === 6) {
        counter = 0;
    } else {
        counter++;
    }
    scroll();
}

function scroll(){
    cards.forEach(function(item){
        item.style.transform = `translateX(-${counter * 49}%)`
    })
}
