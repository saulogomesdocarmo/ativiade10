/**
 * Assincronismo - Promise - Fetch
 * Formulário de Cadastro 
 * @author Saulo Gomes do Carmo
 * @version 1.0
 */

function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    if(frmCadastro.txtNome.value === ""){
        alert("Coloque seu nome")
    }else if(frmCadastro.txtEmail.value === ""){
        alert("Coloque seu email")
    }else if(frmCadastro.txtCelular.value === ""){
        alert("Coloque o seu celular")
    }

    fetch(urlAPI)
        .then((response) => {
            return response.json()
        })
        .then((dados) => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('estado').value = dados.estado
            document.getElementById('uf').value = dados.uf
            document.getElementById('ddd').value = dados.ddd
        })
        .catch((erro) => {
            console.error('Erro ao buscar o endereço')
        })
}