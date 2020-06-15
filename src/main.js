var localStorage;

function populateStorage() {
    localStorage.setItem('bgcolor', 'green');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('image', 'myCat.png');
};


function setStyle() {
    var currentColor = localStorage.getItem("bgcolor");
    console.log(currentColor);


    document.getElementById("bgcolor").value = currentColor;
    const a = document.getElementById("bgcolor");

    a.style.backgroundColor = "#" + currentColor;
};


btnCity.onclick = function () {
    console.log(inputCity.value)
    localStorage.setItem("city", inputCity.value);
    inputCity.value = "";
    city.innerText = localStorage.getItem("city");
};



city.innerText = localStorage.getItem("city");

// сброс города
const badge = document.getElementById("badge");

badge.addEventListener("click", function f() {
    city.innerText = "";
    localStorage.removeItem("city");

});

// Запоминающий текст
area.value = localStorage.getItem('area');

area.oninput = () => {
    localStorage.setItem("area", area.value);
};


// Сохранение состояния чекбоксов в localStorage
const check = document.querySelectorAll(".custom-control-input");

const save = document.getElementById("saveCheck");

// Находим кнопку сохранить и отслеживаем её нажатие
save.addEventListener("click", function f() {
    // перебераем чекбоксы
    for (i = 0; i < check.length; i++) {
        // если у бокс нажат сохраняем его в Storage и отключаем чекбокс
        saveStorage(check[i]);
    };
});

// const check = document.querySelectorAll(".custom-control-input")

function saveStorage(event) {
    const checkValue = event.checked
    localStorage.setItem(event.id, checkValue);
};


// // чекбокс №1
const value1 = JSON.parse(localStorage.getItem(check[0].id))
check[0].checked = value1;
check[0].disabled = value1;
//
// // чекбокс №2
const value2 = JSON.parse(localStorage.getItem(check[1].id))
check[1].checked = value2;
check[1].disabled = value2;
//
// // чекбокс №3
const value3 = JSON.parse(localStorage.getItem(check[2].id))
check[2].checked = value3;
check[2].disabled = value3;
//
// // чекбокс №4
const value4 = JSON.parse(localStorage.getItem(check[3].id))
check[3].checked = value4;
check[3].disabled = value4;
//
// // чекбокс №5
const value5 = JSON.parse(localStorage.getItem(check[4].id))
check[4].checked = value5;
check[4].disabled = value5;
//
// // чекбокс №6
const value6 = JSON.parse(localStorage.getItem(check[5].id))
check[5].checked = value6;
check[5].disabled = value6;












