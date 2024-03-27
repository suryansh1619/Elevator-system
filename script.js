var id = null;

var pos1 = 397;
var pos2 = 397;
var pos3 = 297;

var elem = document.querySelectorAll(".greybox");

var elem1 = document.querySelector("#lift1");
var toggle1 = document.querySelector("#t1");
var floor1 = document.querySelector("#l1num");

var elem2 = document.querySelector("#lift2");
var toggle2 = document.querySelector("#t2");
var floor2 = document.querySelector("#l2num");

var elem3 = document.querySelector("#lift3");
var toggle3 = document.querySelector("#t3");
var floor3 = document.querySelector("#l3num");

if (toggle1.checked === true) {
    elem1.style.border = "2px solid red";
}
if (toggle2.checked === true) {
    elem2.style.border = "2px solid red";
}
if (toggle3.checked === true) {
    elem3.style.border = "2px solid red";
}

toggle3.addEventListener('click', function () {
    if (toggle3.checked === true) {
        elem3.style.border = "2px solid red";
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos3 > 347) floor3.innerHTML = 1;
            else if (pos3 > 247) floor3.innerHTML = 2;
            else if (pos3 > 147) floor3.innerHTML = 3;
            else if (pos3 > 50) floor3.innerHTML = 4;
            else floor3.innerHTML = 5;

            if (pos3 == 397) {
                clearInterval(id);
            }
            else if (pos3 < 397) {
                pos3++;
                elem3.style.top = pos3 + 'px';
            }
            else if (pos3 > 397) {
                pos3--;
                elem3.style.top = pos3 + 'px';
            }
        }
    }
    else {
        elem3.style.border = "";
    }
})

toggle2.addEventListener('click', function () {
    if (toggle2.checked === true) {
        elem2.style.border = "2px solid red";
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos2 > 347) floor2.innerHTML = 1;
            else if (pos2 > 247) floor2.innerHTML = 2;
            else if (pos2 > 147) floor2.innerHTML = 3;
            else if (pos2 > 50) floor2.innerHTML = 4;
            else floor2.innerHTML = 5;

            if (pos2 == 397) {
                clearInterval(id);
            }
            else if (pos2 < 397) {
                pos2++;
                elem2.style.top = pos2 + 'px';
            }
            else if (pos2 > 397) {
                pos2--;
                elem2.style.top = pos2 + 'px';
            }
        }
    }
    else {
        elem2.style.border = "";
    }
})

toggle1.addEventListener('click', function () {
    if (toggle1.checked === true) {
        elem1.style.border = "2px solid red";
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos1 > 347) floor1.innerHTML = 1;
            else if (pos1 > 247) floor1.innerHTML = 2;
            else if (pos1 > 147) floor1.innerHTML = 3;
            else if (pos1 > 50) floor1.innerHTML = 4;
            else floor1.innerHTML = 5;

            if (pos1 == 397) {
                clearInterval(id);
            }
            else if (pos1 < 397) {
                pos1++;
                elem1.style.top = pos1 + 'px';
            }
            else if (pos1 > 397) {
                pos1--;
                elem1.style.top = pos1 + 'px';
            }
        }
    }
    else {
        elem1.style.border = "";
    }
})

function Moves(x) {
    Move1(x);
    // Move2(x);
    // Move3(x);
}

function Move1(x) {
    if (toggle1.checked === false) {
        elem1.style.border = "";
        clearInterval(id);
        id = setInterval(Move, 10);
        function Move() {
            if (pos1 > 347) floor1.innerHTML = 1;
            else if (pos1 > 247) floor1.innerHTML = 2;
            else if (pos1 > 147) floor1.innerHTML = 3;
            else if (pos1 > 50) floor1.innerHTML = 4;
            else floor1.innerHTML = 5;

            if (pos1 == x) {
                clearInterval(id);
                Move2(x);
            }
            else if (pos1 < x) {
                pos1++;
                elem1.style.top = pos1 + 'px';
            }
            else if (pos1 > x) {
                pos1--;
                elem1.style.top = pos1 + 'px';
            }
        }
    }
    else {
        elem1.style.border = "2px solid red";
        Move2(x);
    }
}

function Move2(x) {
    if (toggle2.checked === false) {
        elem2.style.border = "";
        clearInterval(id);
        id = setInterval(Move, 10);
        function Move() {
            if (pos2 > 347) floor2.innerHTML = 1;
            else if (pos2 > 247) floor2.innerHTML = 2;
            else if (pos2 > 147) floor2.innerHTML = 3;
            else if (pos2 > 50) floor2.innerHTML = 4;
            else floor2.innerHTML = 5;

            if (pos2 == x) {
                clearInterval(id);
                Move3(x);
            }
            else if (pos2 < x) {
                pos2++;
                elem2.style.top = pos2 + 'px';
            }
            else if (pos2 > x) {
                pos2--;
                elem2.style.top = pos2 + 'px';
            }
        }
    }
    else {
        elem2.style.border = "2px solid red";
        Move3(x);
    }
}

function Move3(x) {
    if (toggle3.checked === false) {
        elem3.style.border = "";
        clearInterval(id);
        id = setInterval(Move, 10);
        function Move() {
            if (pos3 > 347) floor3.innerHTML = 1;
            else if (pos3 > 247) floor3.innerHTML = 2;
            else if (pos3 > 147) floor3.innerHTML = 3;
            else if (pos3 > 50) floor3.innerHTML = 4;
            else floor3.innerHTML = 5;

            if (pos3 == x) {
                clearInterval(id);
            }
            else if (pos3 < x) {
                pos3++;
                elem3.style.top = pos3 + 'px';
            }
            else if (pos3 > x) {
                pos3--;
                elem3.style.top = pos3 + 'px';
            }
        }
    }
    else {
        elem3.style.border = "2px solid red";
    }
}