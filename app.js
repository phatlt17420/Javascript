

let coursesApi = 'http://localhost:3000/courses';
function start() {

    getCourses(function (courses) {
        renderCourses(courses);
    });
    handleCreateForm();



}
start();








function getCourses(callback) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}
function createCourse(data, callback) {
    let options = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    fetch(coursesApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}





function renderCourses(courses) {
    let listCoursesBlock = document.querySelector('#list-courses');
    let htmls = courses.map(function (course) {
        return `<li>
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    let createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        let name = document.querySelector('input[name="name"]').value;
        let description = document.querySelector('input[name="description"]').value;

        let formData = {
            name: name,
            description: description

        }
        createCourse(formData)
    }
}
function handleDeleteCourse(id) {

    let options = {
        method: "DELETE",

    };
    fetch(coursesApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {

        });
}