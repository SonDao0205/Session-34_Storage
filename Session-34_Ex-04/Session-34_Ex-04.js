
let toDoList = [
    {
        id: 1,
        jobName: "Quét nhà",
    }
];

const inputElement = document.querySelector("#input");
const listJobElement = document.querySelector("#listJob");
const formElement = document.querySelector("#form");
let jobLocals = JSON.parse(localStorage.getItem("jobs")) || toDoList;

const renderData = () => {
    const htmls = jobLocals.map((job) => {
        return `
        <li>
            <span>${job.jobName}</span>
            <button type="button" class="btn btn-danger deleteButton" data-id="${job.id}">Xoá</button>
        </li>`;
    });

    listJobElement.innerHTML = htmls.join("");
    document.querySelectorAll(".deleteButton").forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.getAttribute("data-id"), 10);
            deleteJob(id);
        });
    });
};

const deleteJob = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá công việc này không?")) {
        jobLocals = jobLocals.filter(job => job.id !== id);
        localStorage.setItem("jobs", JSON.stringify(jobLocals));
        renderData();
    }
};

// Render dữ liệu lần đầu
renderData();

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputValue = inputElement.value.trim();

    if (inputValue) {
        const newJob = {
            id: Math.ceil(Math.random() * 100),
            jobName: inputValue,
        };
        jobLocals.push(newJob)
        localStorage.setItem("jobs",JSON.stringify(jobLocals))
        renderData();
        inputElement.value = "";
    }
});