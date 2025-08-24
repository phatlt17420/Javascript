console.log("video 72");

const btn_save = document.getElementById("btn_Save");
const fetchContent = async () => {
    const respone = await fetch(" http://localhost:8000/blogs");
    const data = await respone.json();
    const tbody = document.querySelector("#table tbody");
    if (data && data.length) {
        data.forEach((element, index) => {
            tbody.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
         <td>${element.content}</td>
         <td><button>Xoá</button></td>
        </tr>
        `
        });
    }
}

const addNewRowToEnd = (element) => {
    const tableBody = document.querySelector("#table tbody");
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.author}</td>
         <td>${element.content}</td>
         <td><button>Xoá</button></td>
        </tr>    
    `;
    tableBody.appendChild(newRow);
}


const handleAddNewBlog = () => {
    const input_title = document.getElementById("input_Title");
    const input_author = document.getElementById("input_Author");
    const input_content = document.getElementById("input_Content");
    const btn_save = document.getElementById("btn_Save");
    btn_save.addEventListener("click", async () => {

        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: input_title.value,
                author: input_author.value,
                content: input_content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data);
        console.log("phan hoi API: ", data);



    })





}


fetchContent();
handleAddNewBlog();



