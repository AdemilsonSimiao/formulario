//validação do cpf
function ValidarCPF (strCPF) {
    var soma;
    var resto;
    soma = 0;
    strCPF = strCPF.replace(/[^\d]+/g,'');
    if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999"){
            alert("CPF INVALIDO")
            return false;
        }
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