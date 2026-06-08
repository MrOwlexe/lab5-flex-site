"use strict";

let currentFontSize = 16;

document.addEventListener("DOMContentLoaded", function () {
    const customMenu = document.getElementById("custommenu");

    if (!customMenu) {
        console.error("Елемент #custommenu не знайдено");
        return;
    }

    const swapImages = document.querySelectorAll(".swap-photo");

    swapImages.forEach(function (img) {
        const originalSrc = img.getAttribute("src");
        const hoverSrc = img.dataset.hover;

        img.addEventListener("mouseover", function () {
            img.setAttribute("src", hoverSrc);
        });

        img.addEventListener("mouseout", function () {
            img.setAttribute("src", originalSrc);
        });
    });

    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        customMenu.style.display = "block";
        customMenu.style.visibility = "visible";

        let x = event.clientX;
        let y = event.clientY;

        const menuWidth = customMenu.offsetWidth;
        const menuHeight = customMenu.offsetHeight;

        if (x + menuWidth > window.innerWidth) {
            x = window.innerWidth - menuWidth - 10;
        }

        if (y + menuHeight > window.innerHeight) {
            y = window.innerHeight - menuHeight - 10;
        }

        customMenu.style.left = x + "px";
        customMenu.style.top = y + "px";
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest("#custommenu")) {
            hideCustomMenu();
        }
    });
});

function hideCustomMenu() {
    const customMenu = document.getElementById("custommenu");

    if (customMenu) {
        customMenu.style.display = "none";
        customMenu.style.visibility = "hidden";
    }
}

function checkSymbol(event) {
    const keyCode = event.keyCode || event.which;

    if (keyCode < 48 || keyCode > 57) {
        return false;
    }

    return true;
}

function doAction(actionType) {
    switch (actionType) {
        case "copy":
            navigator.clipboard.writeText(document.body.innerText);
            alert("Вміст сторінки скопійовано");
            break;

        case "close":
            window.close();
            break;

        case "fontIncrease":
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
            break;

        case "fontDecrease":
            currentFontSize -= 2;

            if (currentFontSize < 10) {
                currentFontSize = 10;
            }

            document.body.style.fontSize = currentFontSize + "px";
            break;

        case "changeBkg":
            const colors = ["#eef3f6", "#e8f5f5", "#fff4d6", "#f3e5f5", "#e3f2fd"];
            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            break;
    }

    hideCustomMenu();
}