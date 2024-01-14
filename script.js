var v1, v2, v3, v4, v5, v6, v7, v8, v9;
v1 = document.getElementById("first").innerHTML;
v2 = document.getElementById("second").innerHTML;
v3 = document.getElementById("third").innerHTML;
v4 = document.getElementById("four").innerHTML;
v5 = document.getElementById("five").innerHTML;
v6 = document.getElementById("six").innerHTML;
v7 = document.getElementById("seven").innerHTML;
v8 = document.getElementById("eight").innerHTML;
v9 = document.getElementById("nine").innerHTML;


var b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("first");
b2 = document.getElementById("second");
b3 = document.getElementById("third");
b4 = document.getElementById("four");
b5 = document.getElementById("five");
b6 = document.getElementById("six");
b7 = document.getElementById("seven");
b8 = document.getElementById("eight");
b9 = document.getElementById("nine");

var turn = document.getElementById("turn");


var flag = 1;
function myInput1() {
    if (flag == 1) {
        b1.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b1.classList.add('disabled');
        flag = 0;
    } else {
        b1.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b1.classList.add('disabled');
        flag = 1;
    }
};
function myInput2() {
    if (flag == 1) {
        b2.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b2.classList.add('disabled');
        flag = 0;
    } else {
        b2.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b2.classList.add('disabled');
        flag = 1;
    }
};
function myInput3() {
    if (flag == 1) {
        b3.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b3.classList.add('disabled');
        flag = 0;
    } else {
        b3.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b3.classList.add('disabled');
        flag = 1;
    }
};
function myInput4() {
    if (flag == 1) {
        b4.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b4.classList.add('disabled');
        flag = 0;
    } else {
        b4.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b4.classList.add('disabled');
        flag = 1;
    }
};
function myInput5() {
    if (flag == 1) {
        b5.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b5.classList.add('disabled');
        flag = 0;
    } else {
        b5.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b5.classList.add('disabled');
        flag = 1;
    }
};
function myInput6() {
    if (flag == 1) {
        b6.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b6.classList.add('disabled');
        flag = 0;
    } else {
        b6.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b6.classList.add('disabled');
        flag = 1;
    }
};
function myInput7() {
    if (flag == 1) {
        b7.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b7.classList.add('disabled');
        flag = 0;
    } else {
        b7.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b7.classList.add('disabled');
        flag = 1;
    }
};
function myInput8() {
    if (flag == 1) {
        b8.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b8.classList.add('disabled');
        flag = 0;
    } else {
        b8.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b8.classList.add('disabled');
        flag = 1;
    }
};
function myInput9() {
    if (flag == 1) {
        b9.innerHTML = "X";
        turn.innerHTML = "Player 2 turn";
        b9.classList.add('disabled');
        flag = 0;
    } else {
        b9.innerHTML = "O";
        turn.innerHTML = "Player 1 turn";
        b9.classList.add('disabled');
        flag = 1;
    }
};

function myFunction() {
    if ((b1.innerHTML == 'X') && (b4.innerHTML == 'X') && (b7.innerHTML == 'X')) {
        b1.style.color = 'red';
        b4.style.color = 'red';
        b7.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b2.innerHTML == 'X') && (b5.innerHTML == 'X') && (b8.innerHTML == 'X')) {
        b2.style.color = 'red';
        b5.style.color = 'red';
        b8.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b1.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b3.innerHTML == 'X') && (b6.innerHTML == 'X') && (b9.innerHTML == 'X')) {
        b3.style.color = 'red';
        b6.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
    }
    else if ((b1.innerHTML == 'X') && (b2.innerHTML == 'X') && (b3.innerHTML == 'X')) {
        b1.style.color = 'red';
        b2.style.color = 'red';
        b3.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b4.innerHTML == 'X') && (b5.innerHTML == 'X') && (b6.innerHTML == 'X')) {
        b4.style.color = 'red';
        b5.style.color = 'red';
        b6.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b7.innerHTML == 'X') && (b8.innerHTML == 'X') && (b9.innerHTML == 'X')) {
        b7.style.color = 'red';
        b8.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
    }
    else if ((b1.innerHTML == 'X') && (b5.innerHTML == 'X') && (b9.innerHTML == 'X')) {
        b1.style.color = 'red';
        b5.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
    }
    else if ((b7.innerHTML == 'X') && (b5.innerHTML == 'X') && (b3.innerHTML == 'X')) {
        b7.style.color = 'red';
        b5.style.color = 'red';
        b3.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 1 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b1.innerHTML == 'O') && (b4.innerHTML == 'O') && (b7.innerHTML == 'O')) {
        b1.style.color = 'red';
        b4.style.color = 'red';
        b7.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b2.innerHTML == 'O') && (b5.innerHTML == 'O') && (b8.innerHTML == 'O')) {
        b2.style.color = 'red';
        b5.style.color = 'red';
        b8.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b1.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b3.innerHTML == 'O') && (b6.innerHTML == 'O') && (b9.innerHTML == 'O')) {
        b3.style.color = 'red';
        b6.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
    }
    else if ((b1.innerHTML == 'O') && (b2.innerHTML == 'O') && (b3.innerHTML == 'O')) {
        b1.style.color = 'red';
        b2.style.color = 'red';
        b3.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b4.innerHTML == 'O') && (b5.innerHTML == 'O') && (b6.innerHTML == 'O')) {
        b4.style.color = 'red';
        b5.style.color = 'red';
        b6.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if ((b7.innerHTML == 'O') && (b8.innerHTML == 'O') && (b9.innerHTML == 'O')) {
        b7.style.color = 'red';
        b8.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b5.classList.add('disabled');
        b6.classList.add('disabled');
    }
    else if ((b1.innerHTML == 'O') && (b5.innerHTML == 'O') && (b9.innerHTML == 'O')) {
        b1.style.color = 'red';
        b5.style.color = 'red';
        b9.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b2.classList.add('disabled');
        b3.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b7.classList.add('disabled');
        b8.classList.add('disabled');
    }
    else if ((b7.innerHTML == 'O') && (b5.innerHTML == 'O') && (b3.innerHTML == 'O')) {
        b7.style.color = 'red';
        b5.style.color = 'red';
        b3.style.color = 'red';
        turn.innerHTML = "Wohoo.... Player 2 wins";
        b1.classList.add('disabled');
        b2.classList.add('disabled');
        b4.classList.add('disabled');
        b6.classList.add('disabled');
        b8.classList.add('disabled');
        b9.classList.add('disabled');
    }
    else if((b1.innerHTML == 'X' || b1.innerHTML == 'O') && (b2.innerHTML == 'X' || b2.innerHTML == 'O') && (b3.innerHTML == 'X' || b3.innerHTML == 'O') && (b4.innerHTML == 'X' || b4.innerHTML == 'O') && (b5.innerHTML == 'X' || b5.innerHTML == 'O') && (b6.innerHTML == 'X' || b6.innerHTML == 'O') && (b7.innerHTML == 'X' || b7.innerHTML == 'O') && (b8.innerHTML == 'X' || b8.innerHTML == 'O') && (b9.innerHTML == 'X' || b9.innerHTML == 'O')){
        turn.innerHTML = "Match TIE";
    }

};
document.getElementById("reset").addEventListener('click',resetFunction);
function resetFunction(){
    location.reload();
}