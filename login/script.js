
function clicksubmit(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("cpf").value;
    let btn = document.getElementById("submitbutton");
    let validacao = false

    if (validacao == false){
        alert (email . senha);
        validacao = true;
    }
    else{
        alert(" cadastro não encontrado")
    }
}