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
    // Buscando os dados do formulário
    const id = document .querySelector("#id").value;
    const descricao = document .querySelector("#iddesc").value;
    const saldo = document .querySelector("#idsaldo").value;
    const preco = document .querySelector("#idpreco").value;

    // Montando o JSON para gravar dados
    maior_id().then((ret)=> {
        const dados = {
        "id": ( id == "null" ? ret+1 : id),
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
// Colocando os eventos no formulário
const form = document.querySelector('form');
form.addEventListener('submit',function (e){
    // Tirar a submissão do form
    e.preventDefault();
    // Chamando a gravação do registro
    gravar();
    // Voltando para a página inicial
    setTimeout (()=> {
        window.location.href = "index.html";
    },3000);
})