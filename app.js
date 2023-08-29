function signup() {
    var user_name = document.getElementById('user-name').value
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value
    localStorage.setItem('Username', user_name)
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
}  

function validateForm() {
    var user_name = document.getElementById('user-name').value
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value
    if (email == "" || email == null, pass == "" || pass == null, user_name == "" || user_name == null) {
      alert("Please fill out all fields");
      return false;
    }
    location.href = './Index.html'
  }

function signin() {
    var user_name = document.getElementById('user-name').value
    var email = document.querySelector('input[name="user-email"]').value
    var pass = document.getElementById('user-pass').value
    if (localStorage.getItem('Username') == user_name && localStorage.getItem('Password') == pass) {
        location.href = './welcome.html'
    }
    else if(localStorage.getItem('Email') == email){
        location.href = './welcome.html'
    }
    else {
        alert('Wrong credentials or sign up again')
    }
}

function signout() {
    localStorage.clear()
    alert("Please Sign Up again..")
    location.href = "./Signup.html"
}