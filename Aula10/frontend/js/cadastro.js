/** 
 * JS responsável pelo cadastro
 */
const maior_id = () => {
    //const axios = require('axios').default;
    // Buscando os dados
    return axios.get('http://localhost:3000/produtos').then((ret)=>{
        return ret.data.reduce((a,b) => (a > b?.id ? a : b?.id),0);
    })
}
const gravar = () => {
    // Inibir o botão de gravar e reset para o usuário não clicar enquanto grava
    document.getElementById("modal-cadastro").classList.add("show");
    // Buscando os dados do formulário
    const id = document .querySelector("#id").value;
    const descricao = document .querySelector("#iddesc").value;
    const saldo = parseInt(document .querySelector("#idsaldo").value);
    const preco = parseFloat(document .querySelector("#idpreco").value);

    // Montando o JSON para gravar dados - comando rodando em segundo plano
    maior_id().then((ret)=> {
        const dados = {
        "id": ""+( id == "null" ? parseInt(ret) + 1 : parseInt(id)),
        "descricao": descricao,
        "saldo": saldo,
        "preco": preco,
    }
    if (id == "null"){
        axios.post("http://localhost:3000/produtos", dados)
        .then((ret)=>
            console.log("Produto criado com sucesso!"))
    } else {
        axios.put("http://localhost:3000/produtos/"+id, dados)
        .then((ret)=>
            console.log("Produto gravado com sucesso!"))
    }
    })
}
const carregar = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    if (id){
        document.getElementById("id").value = id;
        const res = await axios.get("http://localhost:3000/produtos/"+id);
        document.getElementById("iddesc").value = res.data.descricao;
        document.getElementById("idpreco").value = res.data.preco;
        document.getElementById("idsaldo").value = res.data.saldo;
    }
}
// Colocando os eventos no formulário   
const form = document.querySelector('form');
form.addEventListener('submit',function (e){
    // Tirar a submissão do form
    e.preventDefault();
    // Chamando a gravação do registro
    gravar();
    // Voltando para a página inicial - precisa colocar pausa para não impactar os demais comandos que estão rodando em paralelo
    setTimeout (()=> {
        window.location.href = "index.html";
    },3000);
})

// Colocando um documento de carregamento da página
document.addEventListener("DOMContentLoaded",function(){
    carregar();
})