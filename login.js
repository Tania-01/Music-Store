

let users = []
let user= {}
    let name = document.getElementById('name');
    let pw = document.getElementById('pw');



$( document ).ready (function store() {
    user.name = name.value;
    user.pw = pw.value;
    users.push(user);
    let savedUsers =  localStorage.getItem('users');
    if(savedUsers){
        let localUsers = JSON.parse(savedUsers);
        localUsers.push(user);
        localStorage.setItem('users', JSON.stringify(localUsers));

    } else{
        localStorage.setItem('users', JSON.stringify(users));
    }

})

function check() {
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let savedUsers =  localStorage.getItem('users');
    let localUsers = JSON.parse(savedUsers);
    for(let i=0; i<=localUsers.length; i++){



        if (localUsers[i].name===userName && localUsers[i].pw===userPw){
            ///Тут шуканий юзер
        }else {
            /// юзера не знайдено
        }
    }
        if(userName.value !== name && userPw.value !== pw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}