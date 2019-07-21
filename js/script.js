var hotelPopup = document.querySelector(".hotel__popup");
var hotelBtn = document.querySelector(".hotel__button");

hotelBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    hotelPopup.classList.toggle("modal-show");
});

var incrChild = document.querySelector(".buttons-wrapper_kids .incr-button");
var decrChild = document.querySelector(".buttons-wrapper_kids .decr-button");
var fieldChild = document.querySelector(".buttons-wrapper_kids input");

var incrAdult = document.querySelector(".buttons-wrapper_adults .incr-button");
var decrAdult = document.querySelector(".buttons-wrapper_adults .decr-button");
var fieldAdult = document.querySelector(".buttons-wrapper_adults input");

incrChild.addEventListener("click", function (evt) {
    evt.preventDefault();

    var value = fieldChild.value;
    value++;
    fieldChild.value = value;
});

decrChild.addEventListener("click", function (evt) {
    evt.preventDefault();

    var value = fieldChild.value;
    if(value > 0) {
        value--;
        fieldChild.value = value;
    }
});

incrAdult.addEventListener("click", function (evt) {
    evt.preventDefault();

    var value = fieldAdult.value;
    value++;
    fieldAdult.value = value;
});

decrAdult.addEventListener("click", function (evt) {
    evt.preventDefault();

    var value = fieldAdult.value;
    if(value > 0) {
        value--;
        fieldAdult.value = value;
    }
});


