let form = document.getElementById("frm");
let divusuario = document.getElementById("txtUsuario");
let divsenha = document.getElementById("txtSenha");
let usuarioErro = document.getElementById("erroUsuario");
let senhaErro = document.getElementById("erroSenha");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validaEntrada();
});

function validaEntrada(){
    let usuarioValor = divusuario.value.trim();
    let senhaValor = divsenha.value.trim()
    usuarioErro.textContent = "";
    senhaErro.textContent = "";
    
    if(usuarioValor === ""){
        MostraErro(usuarioErro,divusuario, "Usuario deve ser preenchido");
    }
    else{
        MostraSucesso(divusuario);
    }
    if(senhaValor === ""){
        MostraErro(senhaErro, divsenha, "Senha deve ser preenchida");

    }
    else if(senhaValor.length < 6 || senhaValor.length >30){
        MostraErro(senhaErro,divsenha,"Senha deve ter entre 6 a 30 caracteres")
    }
    else{
        MostraSucesso(divsenha);
    }

}

function MostraErro(erro,div,txt){
    div.style.borderColor = "red";
    erro.textContent = txt;

}

function MostraSucesso(div){
    div.style.borderColor = "green";
}