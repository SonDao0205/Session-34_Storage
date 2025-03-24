const emailElement = document.querySelector("#emailInput")
const passwordElement = document.querySelector("#passwordInput")
const formElement = document.querySelector("#form")
const userLocals = JSON.parse(localStorage.getItem("users")) || [];

formElement.addEventListener("submit",(event)=>{
    event.preventDefault()
    const emailValue = emailElement.value
    const passwordValue = passwordElement.value
    if (passwordValue.length === 0) {
        alert("Mật khẩu không được bỏ trống")
        return
    }
    const user = userLocals.find(user => user.email === emailValue && user.password === passwordValue);
    if (!user) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }
    alert("Đăng nhập thành công!");
    window.location.href = "https://www.lazada.vn/?spm=a2o4n.homepage.header.dhome.2ef63bdcKzK8RV#?";
})