function signup() {
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
}

function validateForm() {
    var name = document.getElementById('user-name').value
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value
    if (email == "" || email == null, pass == "" || pass == null, name == "" || name == null) {
      alert("Please fill out all fields");
      return false;
    }
    location.href = './index.html'
  }

  

function signin() {
    var email = document.getElementById('user-email').value
    var pass = document.getElementById('user-pass').value
    if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass) {
        location.href = './welcome.html'
    }
    else {
        alert('Please creat an account first...')
        location.href = './Signup.html'
    }
}


function signout() {
    localStorage.clear()
    alert("Please Sign Up again..")
    location.href = "./Signup.html"
}