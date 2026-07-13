// BACKGROUND SLIDESHOW

const backgrounds = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg"
];

let currentBg = 0;

setInterval(() => {

    currentBg++;

    if(currentBg >= backgrounds.length){
        currentBg = 0;
    }

    document.body.style.backgroundImage =
    `url('${backgrounds[currentBg]}')`;

}, 20000);


// SEARCH FUNCTION

function searchPaper(){

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .replace(/\s/g,'');

    let result =
    document.getElementById("result");

    let popular =
    document.getElementById("popularCourses");

    result.innerHTML =
    "<h2>Searching...</h2>";

    setTimeout(() => {

        if(
            input === "eng323" ||
            input === "englishforpublicrelations"
        ){

            popular.style.display = "none";

            result.innerHTML = `

            <h2>
            ENG 323 - English For Public Relations
            </h2>

            <img
            src="papers/eng323.jpg"
            style="
            width:90%;
            max-width:800px;
            border-radius:10px;
            ">

            <br><br>

            <a
            href="papers/eng323.jpg"
            download>

            <button>
            DOWNLOAD IMAGE
            </button>

            </a>

            `;

        }else{

            popular.style.display = "none";

            result.innerHTML = `

            <h2>
            Paper not available
            </h2>

            <p>
            Please try another unit code or unit name.
            </p>

            `;

        }

    },1000);

}


// SHOW POPULAR COURSES AGAIN

document.addEventListener(
"DOMContentLoaded",
function(){

document
.getElementById("searchInput")
.addEventListener("input",function(){

if(this.value.trim()===""){

document.getElementById("result")
.innerHTML = "";

document.getElementById("popularCourses")
.style.display = "block";

}

});

});


// COPY NUMBER

function copyNumber(){

navigator.clipboard.writeText(
"0741186742"
);

alert("Number copied!");

}


// DARK / LIGHT MODE

function toggleMode(){

document.body.classList.toggle(
"light-mode"
);

}