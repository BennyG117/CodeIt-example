function removeMe(element) {
    element.remove()
}

function switchMe(element) {
    if(element.innerText == "Log in") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Log in"
    }
}