var manyClicks = Math.ceil(9 * Math.random());
var proceedClicks = document.getElementById('many');
var totalValeu = manyClicks * Math.random() * 5;
var proceedRating = document.getElementById('rating');
var theStars = document.querySelectorAll('.geen')

function colorStar(starNumber, procent) {
    var Starname = 's' + starNumber;
    procent = Math.min(procent, 100);
    document.getElementById(Starname).style.width = procent + '%';
}

//colorStar(2,50);

function colorTheStars(rating) {
    for (var i = 1; i < 6; i++) {
        colorStar(i, rating * 100);
        rating--;
    }
}


//random generen en uitvoeren in Dom
function proceding() {
    proceedClicks.innerHTML = manyClicks;
    proceedRating.innerHTML = Math.ceil(10 * totalValeu / manyClicks) / 10;
    colorTheStars(Math.ceil(10 * totalValeu / manyClicks) / 10);
}
proceding();

function Click(){
    manyClicks ++;
    var number = this.getAttribute('data-role');
    totalValeu += parseInt(number);
    proceding();
    
}
for (var i=0; i<theStars.length; i++){
    theStars[i].addEventListener('click', Click);
}