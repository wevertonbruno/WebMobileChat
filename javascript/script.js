
function validatePassword() {

    const pwd = document.querySelector('#pass');
    const pwd_vld = document.querySelector('#pass-vld');
    
    if(pwd.value != pwd_vld.value){
        alert("Senha de confirmação incorreta!");
        return false;
    }
    return true;
    
}