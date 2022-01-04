let eventtarget = document.getElementById('b1');

function login() {
    confirm("LOGGED IN SUCCEUSFULLY!");
}

let btntarget = document.getElementById('b2');

function forgot() {
    confirm("OLD PASSWORD IS FORGOTTEN");
    confirm("NOW RESET YOUR PASSWORD!")
    prompt("PLEASE TYPE YOUR EMAIL-ID TO RECOVER THE PASSWORD:")
}

let bttnTarget = document.querySelector("#b")
bttnTarget.addEventListener('click', () => {
    document.body.style.backgroundColor = "#5e0f74"
})