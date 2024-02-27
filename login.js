function checkData(){
    var enteremail=document.getElementById('email').value;
    var enterpass=document.getElementById('pass').value;

    var getEmail=localStorage.getItem('useremail');
    var getPass=localStorage.getItem('userpass');
    
    if ( enteremail==getEmail)
    {
        if (enterpass==getPass){
            window.location.assign("todo.html");
            alert('login successful!!');
        }
        else{
            alert('Wrong Password!!');
        }
    }
    else{
        alert('Wrong Email!!');
    }
}