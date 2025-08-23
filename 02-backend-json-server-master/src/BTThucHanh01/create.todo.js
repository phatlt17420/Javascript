const nameElement = document.getElementById("name");
const btnSaveElement = document.getElementById("btnSave");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


if (btnSaveElement) {
    btnSaveElement.addEventListener("click", () => {
        const currentTodoStr = localStorage.getItem("todo");
        const myTodo = {
            id: getRandomInt(1, 1000),
            name: nameElement.value
        }
        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr) // chuyển từ string sang obj
            // push thêm todo
            currentTodo.push(myTodo);
            localStorage.setItem("todo", JSON.stringify(currentTodo));
        }
        else {
            localStorage.setItem("todo", JSON.stringify([myTodo]));
            console.log(JSON.stringify([myTodo]));
        }
        //success
        window.location.href = "./video70.html";
    })
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);

        const tbody = document.querySelector("#todoList tbody");
        if (todoList && todoList.length) {
            todoList.forEach((element, index) => {
                tbody.innerHTML += `
                <tr>
                <td> ${element.id} </td>
                <td> ${element.name} </td>
                <td> <button data-id="${element.id}" class="btn-delete"> Xoá </button> </td>
                </tr>
                
                
                
                `;



            });
        }
    }
}
generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete")
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn);
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id);
        })
    })
}
const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        console.log(todoList, id);

        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);
        localStorage.setItem("todo", JSON.stringify(newTodo));
        window.location.reload(); // tự reload lại trang

    }


}


