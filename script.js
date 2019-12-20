let starInput;
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');
let resultStar1 = document.getElementById('resultStar1');
let resultStar2 = document.getElementById('resultStar2');
let resultStar3 = document.getElementById('resultStar3');
let resultStar4 = document.getElementById('resultStar4');
let resultStar5 = document.getElementById('resultStar5');

star1.addEventListener('mouseover', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star1.style.cursor = "pointer"

    star1.addEventListener('mouseout', function () {
        star1.style.color = "rgb(221, 221, 221)";
    });
});

star1.addEventListener('click', function () {
    star1.style.color = "rgb(41, 124, 99)";

    star1.addEventListener('mouseover', function () {
        star1.style.color = "rgb(41, 124, 99)";
        star1.style.cursor = "pointer"
    });

    star1.addEventListener('mouseout', function () {
        star1.style.color = "rgb(41, 124, 99)";
    });

    starInput = star1.id;
});

//=============================================================================================

star2.addEventListener('mouseover', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star2.style.cursor = "pointer";

    star2.addEventListener('mouseout', function () {
        star1.style.color = "rgb(221, 221, 221)";
        star2.style.color = "rgb(221, 221, 221)";
    });
});

star2.addEventListener('click', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star2.style.cursor = "pointer";

    star2.addEventListener('mouseout', function () {
        star1.style.color = "rgb(41, 124, 99)";
        star2.style.color = "rgb(41, 124, 99)";
    });

    starInput = star2.id;
});

//=============================================================================================

star3.addEventListener('mouseover', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star3.style.cursor = "pointer";

    star3.addEventListener('mouseout', function () {
        star1.style.color = "rgb(221, 221, 221)";
        star2.style.color = "rgb(221, 221, 221)";
        star3.style.color = "rgb(221, 221, 221)";
    });
});

star3.addEventListener('click', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star3.style.cursor = "pointer";

    star3.addEventListener('mouseout', function () {
        star1.style.color = "rgb(41, 124, 99)";
        star2.style.color = "rgb(41, 124, 99)";
        star3.style.color = "rgb(41, 124, 99)";
    });

    starInput = star3.id;
});

//=============================================================================================

star4.addEventListener('mouseover', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star4.style.color = "rgb(41, 124, 99)";
    star4.style.cursor = "pointer";

    star4.addEventListener('mouseout', function () {
        star1.style.color = "rgb(221, 221, 221)";
        star2.style.color = "rgb(221, 221, 221)";
        star3.style.color = "rgb(221, 221, 221)";
        star4.style.color = "rgb(221, 221, 221)";
    });
});

star4.addEventListener('click', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star4.style.color = "rgb(41, 124, 99)";
    star4.style.cursor = "pointer";

    star4.addEventListener('mouseout', function () {
        star1.style.color = "rgb(41, 124, 99)";
        star2.style.color = "rgb(41, 124, 99)";
        star3.style.color = "rgb(41, 124, 99)";
        star4.style.color = "rgb(41, 124, 99)";
    });

    starInput = star4.id;
});

//=============================================================================================

star5.addEventListener('mouseover', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star4.style.color = "rgb(41, 124, 99)";
    star5.style.color = "rgb(41, 124, 99)";
    star5.style.cursor = "pointer";

    star5.addEventListener('mouseout', function () {
        star1.style.color = "rgb(221, 221, 221)";
        star2.style.color = "rgb(221, 221, 221)";
        star3.style.color = "rgb(221, 221, 221)";
        star4.style.color = "rgb(221, 221, 221)";
        star5.style.color = "rgb(221, 221, 221)";
    });
});

star5.addEventListener('click', function () {
    star1.style.color = "rgb(41, 124, 99)";
    star2.style.color = "rgb(41, 124, 99)";
    star3.style.color = "rgb(41, 124, 99)";
    star4.style.color = "rgb(41, 124, 99)";
    star5.style.color = "rgb(41, 124, 99)";
    star5.style.cursor = "pointer";

    star5.addEventListener('mouseout', function () {
        star1.style.color = "rgb(41, 124, 99)";
        star2.style.color = "rgb(41, 124, 99)";
        star3.style.color = "rgb(41, 124, 99)";
        star4.style.color = "rgb(41, 124, 99)";
        star5.style.color = "rgb(41, 124, 99)";
    });

    starInput = star5.id;
});

//=============================================================================================

document.getElementById('btn-submit').addEventListener('click', function () {
    star1.style.color = "rgb(221, 221, 221)";
    star2.style.color = "rgb(221, 221, 221)";
    star3.style.color = "rgb(221, 221, 221)";
    star4.style.color = "rgb(221, 221, 221)";
    star5.style.color = "rgb(221, 221, 221)";

    console.log(starInput);

    // localStorage.setItem()
});

//=============================================================================================

document.getElementById('btn-submit').addEventListener('click', ratingReview);
window.addEventListener('load', ratingReviewReload);

function ratingReviewReload(ratingsArr) {
    ratingsArr = [];
    starArr = [];
    let avg = 0;
    let result;

    // localStorage.setItem(`starList${localStorage.length + 1}`, starInput);

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(`starList${i + 1}`) === 'star1') {
            ratingsArr.push(1);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star2') {
            ratingsArr.push(2);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star3') {
            ratingsArr.push(3);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star4') {
            ratingsArr.push(4);
        } if (localStorage.getItem(`starList${i + 1}`) === 'star5') {
            ratingsArr.push(5);
        }
    }

    for (let i = 0; i < ratingsArr.length; i++) {
        avg += ratingsArr[i];
    }

    avg /= ratingsArr.length;

    if (Math.ceil(avg) === 1) {
        result = "bad"
        resultStar1.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 2) {
        result = "good"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 3) {
        result = "very good"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 4) {
        result = "great"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
        resultStar4.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 5) {
        result = "exellent"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
        resultStar4.style.color = "rgb(41, 124, 99)";
        resultStar5.style.color = "rgb(41, 124, 99)";
    }

    // console.log(Math.ceil(avg));
    console.log(ratingsArr);
    console.log(result);
}

function ratingReview(ratingsArr) {
    ratingsArr = [];
    starArr = [];
    let avg = 0;
    let result;

    localStorage.setItem(`starList${localStorage.length + 1}`, starInput);

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(`starList${i + 1}`) === 'star1') {
            ratingsArr.push(1);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star2') {
            ratingsArr.push(2);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star3') {
            ratingsArr.push(3);
        } else if (localStorage.getItem(`starList${i + 1}`) === 'star4') {
            ratingsArr.push(4);
        } if (localStorage.getItem(`starList${i + 1}`) === 'star5') {
            ratingsArr.push(5);
        }
    }

    for (let i = 0; i < ratingsArr.length; i++) {
        avg += ratingsArr[i];
    }

    avg /= ratingsArr.length;

    if (Math.ceil(avg) === 1) {
        result = "bad"
        resultStar1.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 2) {
        result = "good"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 3) {
        result = "very good"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 4) {
        result = "great"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
        resultStar4.style.color = "rgb(41, 124, 99)";
    } else if (Math.ceil(avg) === 5) {
        result = "exellent"
        resultStar1.style.color = "rgb(41, 124, 99)";
        resultStar2.style.color = "rgb(41, 124, 99)";
        resultStar3.style.color = "rgb(41, 124, 99)";
        resultStar4.style.color = "rgb(41, 124, 99)";
        resultStar5.style.color = "rgb(41, 124, 99)";
    }

    // console.log(Math.ceil(avg));
    console.log(ratingsArr);
    console.log(result);
}