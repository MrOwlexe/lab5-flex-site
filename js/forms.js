"use strict";

/* Завдання 1. Перевірка пароля */

function editPassword(passwordId, messageId, minLength, maxLength) {
    const password = document.getElementById(passwordId);
    const message = document.getElementById(messageId);

    if (password.value.length < minLength) {
        message.innerText = "Надійний пароль повинен містити не менше " + minLength + " символів";
        message.style.color = "#ff0000";
        return false;
    }

    if (password.value.length > maxLength) {
        message.innerText = "Довжина паролю не повинна перевищувати " + maxLength + " символів";
        message.style.color = "#ff0000";
        return false;
    }

    message.innerText = "Ok";
    message.style.color = "#00aa00";
    return true;
}

/* Завдання 2. Активність кнопки залежно від списку */

function toggleSelectButton(selectedIndex) {
    const button = document.getElementById("selectButton");

    if (selectedIndex > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

/* Завдання 3. Райони та вулиці */

const streetsGal = ["Галицька", "Ставропігійська", "Краківська", "Театральна", "Вірменська"];
const streetsFran = ["Сахарова", "Наукова", "Княгині Ольги", "В. Великого"];
const streetsLych = ["Личаківська", "Пекарська", "Нечуя-Левицького", "Зелена"];
const streetsSykh = ["Хоткевича", "Червоної Калини"];
const streetsShev = ["Чорновола", "Остряниці", "Замарстинівська", "Топольна", "Варшавська"];

const streetsAllCombined = streetsGal
    .concat(streetsFran, streetsLych, streetsSykh, streetsShev)
    .sort();

const streetsAll = [
    null,
    streetsGal.sort(),
    streetsFran.sort(),
    streetsLych.sort(),
    streetsSykh.sort(),
    streetsShev.sort(),
    streetsAllCombined
];

function showStreets(regionIndex, selectId) {
    const streetsSelect = document.getElementById(selectId);

    if (regionIndex <= 0) {
        streetsSelect.style.visibility = "hidden";
        streetsSelect.options.length = 0;
        return false;
    }

    streetsSelect.options.length = 0;
    streetsSelect.style.visibility = "visible";

    const selectedStreets = streetsAll[regionIndex];

    for (let i = 0; i < selectedStreets.length; i++) {
        const newStreet = new Option(selectedStreets[i], selectedStreets[i]);
        streetsSelect.add(newStreet);
    }

    return true;
}

/* Завдання 4. Підрахунок вартості товарів */

function getTotalPrice() {
    let sum = 0;
    const boxes = document.getElementsByName("goods");

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            sum += Number(boxes[i].value);
        }
    }

    document.getElementById("price").innerText = sum;
}

function assignFunctionToCheckboxes() {
    const boxes = document.getElementsByName("goods");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = getTotalPrice;
    }
}

/* Завдання 5. Група з 10 прапорців */

function checkSkillsCount() {
    const boxes = document.getElementsByName("skills");
    const message = document.getElementById("checkboxMessage");
    let checkedCount = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount < 5) {
        message.innerText = "Вибрано замало прапорців. Потрібно вибрати не менше 5.";
        message.style.color = "#ff0000";
    } else {
        message.innerText = "Вибрано достатньо прапорців: " + checkedCount;
        message.style.color = "#00aa00";
    }
}

function assignSkillsCheckboxes() {
    const boxes = document.getElementsByName("skills");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = checkSkillsCount;
    }
}

window.addEventListener("load", function () {
    assignFunctionToCheckboxes();
    assignSkillsCheckboxes();
    checkSkillsCount();
});