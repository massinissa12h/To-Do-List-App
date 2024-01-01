const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const swearWords = ["fuck", "fuck off", "bitch", /* Add your swear words here */];

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else if (containsSwearWord(inputBox.value)) {
        alert("Please don't use such terms");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function containsSwearWord(text) {
    const lowerText = text.toLowerCase();
    for (const swearWord of swearWords) {
        if (lowerText.includes(swearWord)) {
            return true;
        }
    }
    return false;
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
