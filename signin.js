function check() {
    let savedUsers =  localStorage.getItem('users');
    let localUsers = JSON.parse(savedUsers);
    for(let i=0; i<=localUsers.length; i++){

        let userName = document.getElementById('userName');
        let userPw = document.getElementById('userPw');

        if (localUsers[i].name===userName && localUsers[i].pw===userPw){
            jgfhgfhg
        }else {
            ghjghjgj
        }
    }
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}