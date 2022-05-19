//validação do cpf
function ValidarCPF (strCPF) {
    var soma;
    var resto;
    soma = 0;
    strCPF = strCPF.replace(/[^\d]+/g,'');
    
    if(strCPF == "00000000000"){
        alert("CPF INVALIDO")
        return false;
    }
    for(i =1; i<=9; i++)
        soma = soma + parseInt(strCPF.substring(i-1,i)*(11-i));
    resto = (soma * 10)%11;
    if((resto == 10)||(resto==11))
        resto = 0;
    if(resto != parseInt(strCPF.substring(9,10))){
        alert("CPF INVALIDO")
        return false;
    }
    soma = 0;
    for(i=1; i<=10; i++)
        soma = soma + parseInt(strCPF.substring(i - 1, i)*(12-i));
    resto = (soma * 10) % 11;
    if((resto == 10)||(resto == 11))
        resto = 0;
    if(resto != parseInt(strCPF.substring(10, 11))){
        alert("CPF INVALIDO")
        return false;
    }
     return true
}