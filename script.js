const checkNameValid = (name) => {
    let newName = name.toLowerCase();
    let startIndex = 'a'.charCodeAt(0);
    let endIndex = 'z'.charCodeAt(0);
    let space = ' '.charCodeAt(0)
    if (name == "") {
        document.getElementById("name1").style.display = "inline";
    } else {
        for (let i = 0; i < name.length; i++) {
            if (name[i] < startIndex || name < endIndex) {
                document.getElementById("name1").innerHTML = "Invalid User name"
                document.getElementById("name1").style.display = "inline";
                break;
            }
        }
    }
}
const checkEmailValid = (email) => {
    if (email == "") {
        document.getElementById("email1").style.display = "inline";
    }
}
const checkPasswordValid = (password, changePasssword) => {
    if (password == "") {
        document.getElementById("password1").style.display = "inline";
    }
    if (changePasssword = "") {
        document.getElementById("checkPassword1").style.display = "inline";
    } else if (password == changePasssword) {
        document.getElementById("checkPassword1").innerHTML = "Password does Not match";
        document.getElementById("checkPassword1").style.display = "inline";
    }
}

function Isvalid() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let CheckPassword = document.getElementById("CheckPassword").value.trim();

    checkNameValid(name);
    checkEmailValid(email);
    checkPasswordValid(password, CheckPassword)
}

document.getElementById("name1").style.display = "none";
document.getElementById("email1").style.display = "none";
document.getElementById("password1").style.display = "none";
document.getElementById("checkPassword1").style.display = "none";