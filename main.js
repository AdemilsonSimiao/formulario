window.addEventListener('load', carregado);

var db = openDatabase("myDB", "1.0", "Formulario", 2 * 1024 * 1024);

db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS tabela ( id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, email TEXT, telefone TEXT, cpf TEXT, cep TEXT, endereco TEXT, numero TEXT, complemento TEXT, bairro TEXT, cidade TEXT, estado TEXT)");
});

function carregado () {
    document.getElementById('btn').addEventListener('click', salvar);
    mostrar();
}

function salvar () {
    var id = document.getElementById('id-atualizar').value;
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    db.transaction(function(tx){
        if(id){
            tx.executeSql('UPDATE tabela SET nome=?, sobrenome=?, email=?, telefone=?, cpf=?, cep=?, endereco=?, numero=?, complemento=?, bairro=?, cidade=?, estado=? WHERE id=?',[nome,sobrenome,email,telefone,cpf,cep,endereco,numero,complemento,bairro,cidade,estado,id]);
        }else{
            tx.executeSql('INSERT INTO tabela (nome, sobrenome, email, telefone, cpf, cep, endereco, numero, complemento, bairro, cidade, estado ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',[nome,sobrenome,email,telefone,cpf,cep,endereco,numero,complemento,bairro,cidade,estado]);
        }
        
    });
    mostrar();
}

function mostrar () {
    var table = document.getElementById('t-body');
    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM tabela',[], function(tx, resultado){
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                tr += '<tr>';
                tr += '<td onClick="atualizar('+ rows[i].id +')">' + rows[i].nome + '<td>';
                tr += '<td>' + rows[i].sobrenome + '<td>';
                tr += '<td>' + rows[i].telefone + '<td>';
                tr += '<td>' + rows[i].email + '<td>';
                tr += '</tr>';
            }
            table.innerHTML = tr;
        });
    },null);
}

function atualizar (_id) {
    
    var id = document.getElementById('id-atualizar');
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var cpf = document.getElementById('cpf');
    var cep = document.getElementById('cep');
    var endereco = document.getElementById('endereco');
    var numero = document.getElementById('numero');
    var complemento = document.getElementById('complemento');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado'); 
    
    id.value = _id;

    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM tabela WHERE id=?', [_id], function(tx, resultado){
        var rows = resultado.rows[0];
        nome.value = rows.nome;
        sobrenome.value = rows.sobrenome;
        email.value = rows.email;
        telefone.value = rows.telefone;
        cpf.value = rows.cpf;
        cep.value = rows.cep;
        endereco.value = rows.endereco;
        numero.value = rows.numero;
        complemento.value = rows.complemento;
        bairro.value = rows.bairro;
        cidade.value = rows.cidade;
        estado.value = rows.estado;
        });
    });
}

function apagar () {
    var id = document.getElementById('id-atualizar').value;
    db.transaction(function(tx){
        tx.executeSql('DELETE FROM tabela WHERE id=?', [id]);
    });
}