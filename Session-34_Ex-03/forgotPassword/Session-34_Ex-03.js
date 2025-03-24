console.log(localStorage.getItem("users"));

const emailElement = document.querySelector("#emailInput")
const passwordElement = document.querySelector("#passwordInput")
const confirmPasswordElement = document.querySelector("#confirmPasswordInput")
const formElement = document.querySelector("#form")
const userLocals = JSON.parse(localStorage.getItem("users")) || [];

const validatePassword = (passwordValue) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(passwordValue);
}

formElement.addEventListener("submit",(event)=>{
    event.preventDefault()
    const emailValue = emailElement.value
    const passwordValue = passwordElement.value
    const confirmPasswordvalue = confirmPasswordElement.value
    if (!emailValue) {
        alert(`Email không được bỏ trống`)
        return
    }
    if (passwordValue.length === 0) {
        alert("Mật khẩu không được bỏ trống")
        return
    }
    else if (!validatePassword(passwordValue)) {
        alert("Mật khẩu không hợp lệ")
        return
    }
    if (confirmPasswordvalue.length === 0) {
        alert("Xác nhận mật khẩu không được bỏ trống")
        return
    }
    const index = userLocals.findIndex((user) => user.email === emailValue)
    console.log(index);
    if (index === -1) {
        alert("Không tồn tại email!")
        return
    }
    userLocals[index].password = passwordValue
    localStorage.setItem("users",JSON.stringify(userLocals))
    alert("Thay đổi mật khẩu thành công")  
})