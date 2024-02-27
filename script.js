function addData()
    {
            var name=document.getElementById('username').value;
            var email=document.getElementById('email').value;
            var pass=document.getElementById('pass').value;
        
            localStorage.setItem('username',name);
            localStorage.setItem('useremail',email);
            localStorage.setItem('userpass',pass);

    }
    inputBox.value="";
    saveData();

