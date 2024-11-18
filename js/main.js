const logOut = document.getElementById('log-out');
const settingsBtn = document.getElementById('settings');
const settingsDiv = document.getElementById('settingsDiv');

logOut.addEventListener('click', function (){ 
    localStorage.removeItem('token');
    window.location.href = './login.html';  
});

settingsBtn.addEventListener('click', function (){ 
    settingsDiv.classList.toggle('showSettings');
});
