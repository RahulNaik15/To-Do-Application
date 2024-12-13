const todoInput = document.getElementById("todo-id");
const todoContainer = document.querySelector(".todos");

function addValue() {
    const todoDiv = document.createElement("div");//creating div
    todoDiv.classList.add("todo");//giving class to it
    const todoPara = document.createElement("p");//creating paragraph
    todoPara.innerText = todoInput.value;//inserting value in para taken from input box
    const todobtn = document.createElement("button");//creating buttton to reemove
    todobtn.innerText = "Remove";

    todobtn.setAttribute("onclick", "deleteBtn(this)");

    todoDiv.append(todoPara, todobtn);//appending para and button to todo-input div4
    todoContainer.append(todoDiv);

    todoInput.value = "";
}

function deleteBtn(btn) {
    const todoDiv = btn.parentElement;
    todoContainer.removeChild(todoDiv);
}


