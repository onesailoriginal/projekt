const notify = document.getElementById('notify');
const loginbtn = document.getElementById('loginbtn');
const formBlock = document.getElementById('form_block');
const notifyIcon = document.getElementById('notifyIcon');
const notifyText = document.getElementById('notifyText');

function showNotification() {
    setTimeout(() => {
        notify.classList.add('show');
        setTimeout(() => {
            notify.classList.remove('show');
        }, 3000); 
    }, 100); 
}

loginbtn.addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (loginbtn.innerText == "Sign in") {
        const username = document.getElementById('username');
        notifyIcon.classList.remove('fa-circle-exclamation');
        notifyIcon.classList.remove('fa-circle-info');
        notifyIcon.classList.remove('fa-circle-check');

        if (username.value == "admin") {
            notifyText.innerText = "Successfully logined"
            notify.style.backgroundColor = "rgb(69, 193, 89)";
            notifyIcon.classList.add('fa-circle-check');
            showNotification();
            username.value = "";
            passwordField.value = "";
            setTimeout(() => {
                formBlock.style.display = "none";
                window.location.href = "././main.html"
                
            }, 2000)
        } else {
            notifyText.innerText = "Invalid username/password";
            notifyIcon.classList.add('fa-circle-exclamation');
            notify.style.backgroundColor = "rgb(156, 54, 54)";
            showNotification();
        }
    } else if (loginbtn.innerText == "Sign up"){
        console.log('register check')
        const confirmPasswordField = document.getElementById('confirmPassword');
        if (passwordField.value!= confirmPasswordField.value || passwordField.value == "") {
            notifyText.innerText = "Passwords don't match";
            notifyIcon.classList.add('fa-circle-exclamation');
            notify.style.backgroundColor = "rgb(156, 54, 54)";
            showNotification();
            return;
        } else {
            console.log('Login successful')
            
            notifyIcon.classList.add('fa-circle-check');
            notifyText.innerText = "Registration successful";
            notify.style.backgroundColor = "rgb(69, 193, 89)";
            showNotification();
            return;
        }
    }
});

function signUp() {
    const signUpLink = document.querySelector('.sign-up');
    const signTitle = document.getElementById('signtitle');
    const signQuest = document.getElementById('signquest');
    const unameField = document.getElementById('username');

    const passwordField = document.getElementById('password');
    if (signUpLink.innerText == 'Sign up') {
         // Növeljük a form méretét
         
         // Ellenőrizzük, hogy a plusz mezők nincsenek-e már hozzáadva
         if (!document.getElementById('email')) {
             signTitle.innerText = "Sign up";
             // Létrehozunk egy új email input mezőt
             const emailField = document.createElement('input');
             emailField.type = 'email';
             emailField.className = 'form_field animate-input'; // Animáció osztály
             emailField.placeholder = 'Email';
             emailField.name = 'email';
             emailField.id = 'email';
             
             // Létrehozunk egy új jelszó megerősítő mezőt
             const confirmPasswordField = document.createElement('input');
             confirmPasswordField.type = 'password';
             confirmPasswordField.className = 'form_field animate-input'; // Animáció osztály
             confirmPasswordField.placeholder = 'Confirm Password';
             confirmPasswordField.name = 'confirmPassword';
             confirmPasswordField.id = 'confirmPassword';
             passwordField.value = ""
             
             const p = document.createElement('p')
             p.innerText = "Im not a BOT"
             p.id = 'botcheck';
             
             // Behelyezzük az új mezőket a form csoport végére
             const formGroup = document.querySelector('.form_group');
             formGroup.appendChild(confirmPasswordField);
             formGroup.appendChild(emailField);
             formGroup.appendChild(p);
             
             // A gombhoz és a linkhez animációs osztályokat adunk hozzá
             loginbtn.classList.add('animate-move-down');
             loginbtn.innerText = "Sign up"
             
             signUpLink.innerText = 'Sign in';
             signQuest.innerText = "Have an account? ";
             signQuest.appendChild(signUpLink);
             
             
         }
        
            formBlock.style.height = "35rem";
        
    } else {
        const confirmPasswordField = document.getElementById('confirmPassword');
        const emailField = document.getElementById('email')
        const botCheck = document.getElementById('botcheck');
        unameField.value = "";
        passwordField.value = "";
        confirmPasswordField.remove()
        emailField.remove()
        botCheck.remove()
        signTitle.innerText = "Sign In"
        loginbtn.classList.remove('animate-move-down');
        formBlock.style.height = "20rem";
        signQuest.innerText = "Don't have an account? "
        signUpLink.innerText = "Sign up"
        signQuest.appendChild(signUpLink);
        loginbtn.innerText = "Sign in"

    }
   
}

