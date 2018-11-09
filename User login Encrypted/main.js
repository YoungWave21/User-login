// TITLE
document.getElementById("login").addEventListener("click", login);
document.addEventListener("keydown", evaluate);

function evaluate(event) {
    if (event.code == "Enter") {
        login();
    }
}

function enc(x) {
    switch (x) {
        case "a":
            return "q";
            break;
        case "b":
            return "w";
            break;
        case "c":
            return "e";
            break;
        case "d":
            return "r";
            break;
        case "e":
            return "t";
            break;
        case "f":
            return "y";
            break;
        case "g":
            return "u";
            break;
        case "h":
            return "i";
            break;
        case "i":
            return "o";
            break;
        case "j":
            return "p";
            break;
        case "k":
            return "a";
            break;
        case "l":
            return "s";
            break;
        case "m":
            return "d";
            break;
        case "n":
            return "f";
            break;
        case "o":
            return "g";
            break;
        case "p":
            return "h";
            break;
        case "q":
            return "j";
            break;
        case "r":
            return "k";
            break;
        case "s":
            return "l";
            break;
        case "t":
            return "z";
            break;
        case "u":
            return "x";
            break;
        case "v":
            return "c";
            break;
        case "w":
            return "v";
            break;
        case "x":
            return "b";
            break;
        case "y":
            return "n";
            break;
        case "z":
            return "m";
            break;
        case " ":
            return "";
            break;
    }
}


let username = "admin";
let password = "dnfqdtolqqaqli";


document.getElementById("login").addEventListener("click", login)


function login() {
    let rawtext = document.getElementById("password").value;
    rawtext = rawtext.toLowerCase();

    let temptext = "";
    for (i = 0; i < rawtext.length; i++) {
        temptext += enc(rawtext[i]);
    }

    let loginattempt = document.getElementById("username").value;
    loginattempt = loginattempt.toLowerCase();

    if (username == loginattempt) {
        if (password == temptext) {
            document.getElementById("attempts").innerHTML = "Sign In Successful";
            document.getElementById("attempts").className = "success";
        } else {
            document.getElementById("attempts").innerHTML = "Sign In Unsuccessful";
            document.getElementById("attempts").className = "unsuccess";
        }
    } else {
        document.getElementById("attempts").innerHTML = "Sign In Unsuccessful";
        document.getElementById("attempts").className = "unsuccess";
    }
}