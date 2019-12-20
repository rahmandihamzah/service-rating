document.getElementById('star1').addEventListener('mouseover', function () {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    document.getElementById('star1').style.cursor = "pointer";
});

document.getElementById('star1').addEventListener('mouseout', function () {
    document.getElementById('star1').style.color = "rgb(221, 221, 221)";
});

document.getElementById('star1').addEventListener('mouseout', function () {
    document.getElementById('star1').style.active.color = "rgb(221, 221, 221)";
});

function changeColor() {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    return false;
}

document.getElementById('star2').addEventListener('mouseover', function () {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    document.getElementById('star2').style.color = "rgb(41, 124, 99)";
    document.getElementById('star2').style.cursor = "pointer";

});

document.getElementById('star2').addEventListener('mouseout', function () {
    document.getElementById('star1').style.color = "rgb(221, 221, 221)";
    document.getElementById('star2').style.color = "rgb(221, 221, 221)";
});

document.getElementById('star3').addEventListener('mouseover', function () {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    document.getElementById('star2').style.color = "rgb(41, 124, 99)";
    document.getElementById('star3').style.color = "rgb(41, 124, 99)";
    document.getElementById('star3').style.cursor = "pointer";

});

document.getElementById('star3').addEventListener('mouseout', function () {
    document.getElementById('star1').style.color = "rgb(221, 221, 221)";
    document.getElementById('star2').style.color = "rgb(221, 221, 221)";
    document.getElementById('star3').style.color = "rgb(221, 221, 221)";
});

document.getElementById('star4').addEventListener('mouseover', function () {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    document.getElementById('star2').style.color = "rgb(41, 124, 99)";
    document.getElementById('star3').style.color = "rgb(41, 124, 99)";
    document.getElementById('star4').style.color = "rgb(41, 124, 99)";
    document.getElementById('star4').style.cursor = "pointer";
});

document.getElementById('star4').addEventListener('mouseout', function () {
    document.getElementById('star1').style.color = "rgb(221, 221, 221)";
    document.getElementById('star2').style.color = "rgb(221, 221, 221)";
    document.getElementById('star3').style.color = "rgb(221, 221, 221)";
    document.getElementById('star4').style.color = "rgb(221, 221, 221)";
});

document.getElementById('star5').addEventListener('mouseover', function () {
    document.getElementById('star1').style.color = "rgb(41, 124, 99)";
    document.getElementById('star2').style.color = "rgb(41, 124, 99)";
    document.getElementById('star3').style.color = "rgb(41, 124, 99)";
    document.getElementById('star4').style.color = "rgb(41, 124, 99)";
    document.getElementById('star5').style.color = "rgb(41, 124, 99)";
    document.getElementById('star5').style.cursor = "pointer";
});

document.getElementById('star5').addEventListener('mouseout', function () {
    document.getElementById('star1').style.color = "rgb(221, 221, 221)";
    document.getElementById('star2').style.color = "rgb(221, 221, 221)";
    document.getElementById('star3').style.color = "rgb(221, 221, 221)";
    document.getElementById('star4').style.color = "rgb(221, 221, 221)";
    document.getElementById('star5').style.color = "rgb(221, 221, 221)";
});

document.getElementById('btn-submit').addEventListener('click', ratingReview);

function ratingReview(ratings) {
    let avg = 0;
    // let resultArr = [];
    let result;
    ratings = [1, 2, 5, 5];

    for (let i = 0; i < ratings.length; i++) {
        avg += ratings[i];
    }

    avg /= ratings.length;

    if (Math.ceil(avg) === 1) {
        result = "bad"
    } else if (Math.ceil(avg) === 2) {
        result = "good"
    } else if (Math.ceil(avg) === 3) {
        result = "very good"
    } else if (Math.ceil(avg) === 4) {
        result = "great"
    } else if (Math.ceil(avg) === 5) {
        result = "exellent"
    }

    console.log(result);

    // return result;
}

// console.log(ratingReview([1, 5, 5]));
// // [ 'fullstar', 'fullStar', 'fullStar', 'halfStar', 'emptyStar']

// console.log(ratingReview([5, 5, 5]));
// // [ 'fullstar', 'fullStar', 'fullStar', 'fullStar', 'fullStar']

// console.log(ratingReview([1, 2, 3, 4, 5]));
// // [ 'fullStar', 'fullStar', 'fullStar', 'emptyStar', 'emptyStar' ]

// console.log(ratingReview([3, 3, 3, 4, 5]));
//   // [ 'fullStar', 'fullStar', 'fullStar', 'halfStar', 'emptyStar' ]