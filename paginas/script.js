function validarContato(){
    var form = document.forms['formulario'];
    var nome = form.nome.value;
    var telefone = form.telefone.value;

    if(nome == "" || nome.length < 3){
        alert('Insira o Nome corretamente!')
        form.nome.focus();
        return false;
    }

    if(telefone == "" || telefone.length != 12){
        alert('Insira o Telefone corretamente!')
        form.telefone.focus();
        return false;
    }
}
    
function validarCadastro(){
    var form = document.forms['formulario'];
    var cep = form.cep.value;
    var nome = form.nome.value;
    
    if(nome == "" || nome.length < 3){
        alert('Insira o Nome corretamente!')
        form.nome.focus();
        return false;
    }

    if(cep =="" || cep.length < 9 || cep.length > 9){
        alert('Insira o Cep corretamente!')
        form.cep.focus();
        return false;
    }
}

  