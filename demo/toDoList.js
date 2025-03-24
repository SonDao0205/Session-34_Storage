const inputElement = document.querySelector("#form2");
const formElement = document.querySelector("#form");
const jobLocals = JSON.parse(localStorage.getItem("jobs")) || []; // Phòng trường hợp chưa có key nào tên jobs thì cho mặc định thành mảng rỗng
const listElement = document.querySelector("#listJob")

// lắng nghe submit form
formElement.addEventListener("submit",(event)=>{
    event.preventDefault()
    // Lấy dữ liệu từ người dùng
    const inputValue = inputElement.value.trim()
    

    // Validate dữ liệu đầu vào
    if (!inputValue) {
        alert("Tên công việc không được để trống")
        return
    }  

    // Lưu trữ dữ liệu lên localStorage
    // B1: Xác định các thông tin của công việc (Tên cv, trạng thái cv)
    const job = {
        id:Math.floor(Math.random()*99),
        jobName: inputValue,
        status : false
    }

    // Push công việc mới nhất vào mảng
    jobLocals.push(job)

    // B2: Lưu dữ liệu lên local
    localStorage.setItem("jobs",JSON.stringify(jobLocals))    
    // localStorage.setItem("jobs",JSON.stringify(job))    
    
    
    // render lại giao diện mới nhất cho người dùng
    inputElement.value = ``
    renderData()
})


function renderData(params) {
    const jobHtmls = jobLocals.map((job) => {
        return`
        <li class="list-group-item d-flex
            align-items-center border-0 mb-2
            rounded justify-content-between"
            style="background-color:
            #f4f6f7;">
            <div>
                <input
                    class="form-check-input
                    me-2" type="checkbox"
                    ${job.status === true ? checked : ""}/>
                    ${job.status === true ? `<s>${job.jobName}</s>`: `<span>${job.jobName}</span>`}
            </div>
            <div>
                <a href="#!"
                    class="text-info"
                    title="Sửa công việc"><i
                        class="fas
                        fa-pencil-alt
                        me-3"></i>
                </a>
                <a href="#!"
                    class="text-danger"
                    title="Xóa công việc"><i
                        class="fas
                        fa-trash-alt"></i>
                </a>
            </div>
        </li>
        `
    })
    const convert = jobHtmls.join("")
    listElement.innerHTML = convert
}
renderData()