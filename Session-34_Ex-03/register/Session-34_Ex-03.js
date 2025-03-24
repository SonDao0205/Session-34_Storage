const emailElement = document.querySelector("#emailInput")
const passwordElement = document.querySelector("#passwordInput")
const confirmPasswordElement = document.querySelector("#confirmPasswordInput")
const formElement = document.querySelector("#form")
const userLocals = JSON.parse(localStorage.getItem("users")) || [];

const validateEmail = (emailValue) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    return emailRegex.test(emailValue);
}

const validatePassword = (passwordValue) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(passwordValue);
}

formElement.addEventListener("submit",(event)=>{
    event.preventDefault()
    const emailValue = emailElement.value
    const passwordValue = passwordElement.value
    const confirmPasswordvalue = confirmPasswordElement.value
    if(!validateEmail(emailValue)){
        alert("Email không hợp lệ")
        return;
    }

    if (userLocals.some(user => user.email === emailValue)) {
        alert("Email đã tồn tại")
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
    else if (confirmPasswordvalue != passwordValue) {
        alert("Xác nhận mật khẩu không hợp lệ")
        return
    }
    const user = {
        id:Math.floor(Math.random()*99),
        email: emailValue,
        password: passwordValue
    }
    userLocals.push(user)
    localStorage.setItem("users",JSON.stringify(userLocals))
    alert("Đăng ký thành công!")
})