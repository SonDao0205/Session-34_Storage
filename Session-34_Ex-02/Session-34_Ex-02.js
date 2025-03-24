const courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    }
];

const contentElement = document.querySelector("#contentInput")
const dateElement = document.querySelector("#dateInput")
const selectElement = document.querySelector("#selectInput")
const usernameElement = document.querySelector("#userNameInput")
const submitButtonElement = document.querySelector("#submitButton")
let courseLocals = JSON.parse(localStorage.getItem("course")) || courses;
const tableBodyElement = document.querySelector("#tableBody")

submitButtonElement.addEventListener("click",(event)=>{
    event.preventDefault()
    const contentValue = contentElement.value
    const dateValue = dateElement.value
    const selectValue = selectElement.value
    const usernameValue = usernameElement.value
    const newCourse = {
        id:Math.floor(Math.random()*99),
        content: contentValue,
        dueDate: dateValue,
        status: `${selectValue === `1` ? `Pending` : `Success`}`,
        assignedTo: usernameValue,
    }
    courseLocals.push(newCourse)
    localStorage.setItem("course",JSON.stringify(courseLocals))
    renderData();
    contentValue.value = ""
    dateValue.value = ""
    selectValue.value = ""
    usernameValue.value = ""
})

const renderData = () => {
    tableBodyElement.innerHTML = "";
    const htmls = courseLocals.map((course, index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${course.content}</td>
            <td>${course.dueDate}</td>
            <td>${course.status}</td>
            <td>${course.assignedTo}</td>
            <td><button class="deleteButton" data-id="${course.id}">Xoá</button></td>
        </tr>`;
    });

    tableBodyElement.innerHTML = htmls.join("");

    document.querySelectorAll(".deleteButton").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.getAttribute("data-id"), 10);
            deleteCourse(id);
        });
    });
};

renderData();

const deleteCourse = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá khoá học này không?")) {
        courseLocals = courseLocals.filter(course => course.id !== id);
        localStorage.setItem("course", JSON.stringify(courseLocals));
        renderData();
    }
};
