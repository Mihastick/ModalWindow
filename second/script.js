let but = document.getElementById('but');
let modal = document.querySelector('.modal');

let passInput = document.getElementById('pass');
let nameInput = document.getElementById('name');

let closeSimb = document.querySelector('.closeSimb');

let but2 = document.getElementById('but2');

let yourName = document.getElementById('yourName');
yourName.style.display = 'none';

    function onLoad(){
        if(localStorage.getItem("name") !== null){
            yourName.textContent = localStorage.getItem('name');
            yourName.style.display = 'block';
            but.textContent = 'Log Out';
        }
    }

        window.onload = onLoad();

    
but.addEventListener('click', show);

function show() {

    if (but.textContent !== 'Log Out') {
        modal.style.display = 'flex';
    }
    else {
        yourName.style.display = 'none';
        modal.style.display = 'none';
        but.textContent = 'Sign In';
        localStorage.removeItem('name');
    }
}

but2.addEventListener('click', () => {
    // localStorage.setItem('password', passInput.value);
    localStorage.setItem('name', nameInput.value);
    close();
    yourName.textContent = localStorage.getItem('name');
    yourName.style.display = 'block';
    but.textContent = 'Log Out';
});

closeSimb.addEventListener('click', close);




function close() {
    modal.style.display = 'none';
}
