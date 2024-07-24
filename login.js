function fn() {
    let inp = document.getElementById("inp").value;
    localStorage.setItem("name",inp)
    let mail = document.getElementById("mail").value;
    localStorage.setItem("mail",mail)
    location.reload()
}

window.addEventListener("load",() => {
    const value = localStorage.getItem("name")
    const user = document.getElementById("user");
    user.innerText = value;
})
window.addEventListener("load",() => {
    const value2 = localStorage.getItem("mail")
    const user = document.getElementById("user");
    user.innerText = value;
})

function fn2(){
    localStorage.removeItem("name")
    localStorage.removeItem("mail")
    location.reload()
}
