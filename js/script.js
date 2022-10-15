const buttomFinalizarPedido = document.querySelector(".finalizar-pedido");
const buttomFinalizarPedidoDepois = document.querySelector(".finaliza-depois");
const popupFinalizarPedidoText = document.querySelector("#popup");
const nomePratoFinalizarPedido = document.querySelector("#nome-prato");
const nomeBebidaFinalizarPedido = document.querySelector("#nome-bebida");
const nomeSobremesaFinalizarPedido = document.querySelector("#nome-sobremesa");
const valorPratoFinalizarPedido = document.querySelector("#valor-prato");
const valorBebidaFinalizarPedido = document.querySelector("#valor-bebida");
const valorSobremesaFinalizarPedido = document.querySelector("#valor-sobremesa");
const valorTotalFinalizarPedido = document.querySelector("#total-valor");
const containerInfoCliente = document.querySelector(".informacoes-cliente-container");
const inputNomeCliente = document.querySelector("#nome-cliente");
const inputEnderecoCliente = document.querySelector("#endereco-cliente");
const buttonsInfoCliente = document.querySelector(".buttons-info-cliente");
const textInfoFinalizaPedido = document.querySelector(".finalizado-popup");


let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;
let qtd;
let nome;
let endereco;




function calculaValores() {    
     return valorPrato + valorBebida + valorSobremesa;
}







function selecionaPrato(item) {
     pratoSelecionado = true;
     let itemList = item.getElementsByTagName("h1");
     prato = itemList[0].innerText;

     let itemValorList = item.getElementsByTagName("span");
     valorPrato = parseFloat(itemValorList[0].innerText.replace(",", "."));
     
     const seleciona = document.querySelector('.comida .border-check');

     if (seleciona != null){
          seleciona.classList.remove("border-check");
     }

     item.classList.add("border-check");
     
     alteraQtdPedido();
     
     

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedido.classList.add("hidden");
          buttomFinalizarPedidoDepois.classList.remove("hidden");
     }
     if (pratoSelecionado === false || bebidaSelecionada === false || sobremesaSelecionada === false){
          buttomFinalizarPedido.classList.remove("hidden");
          buttomFinalizarPedidoDepois.classList.add("hidden");
     }

     
}


function selecionaBebida(item) {
     bebidaSelecionada = true;

     let itemList = item.getElementsByTagName("h1");
     bebida = itemList[0].innerText;

     let itemValorList = item.getElementsByTagName("span");
     valorBebida = parseFloat(itemValorList[0].innerText.replace(",", "."));
     
     const seleciona = document.querySelector('.drinks .border-check');

     if (seleciona != null){
          seleciona.classList.remove("border-check");
     }

     item.classList.add("border-check");
     
     alteraQtdPedido();
     
     

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedido.classList.add("hidden");
          buttomFinalizarPedidoDepois.classList.remove("hidden");
     }
     if (pratoSelecionado === false || bebidaSelecionada === false || sobremesaSelecionada === false){
          buttomFinalizarPedido.classList.remove("hidden");
          buttomFinalizarPedidoDepois.classList.add("hidden");
     }

     
}

function selecionaSobremesa (item) {
     sobremesaSelecionada = true;

     let itemList = item.getElementsByTagName("h1");
     sobremesa = itemList[0].innerText;

     let itemValorList = item.getElementsByTagName("span");
     valorSobremesa = parseFloat(itemValorList[0].innerText.replace(",", "."));
     
     const seleciona = document.querySelector('.sobremesa .border-check');

     if (seleciona != null){
          seleciona.classList.remove("border-check");
     }

     item.classList.add("border-check");
     
     alteraQtdPedido();
     
     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedido.classList.add("hidden");
          buttomFinalizarPedidoDepois.classList.remove("hidden");
     }
     if (pratoSelecionado === false || bebidaSelecionada === false || sobremesaSelecionada === false){
          buttomFinalizarPedido.classList.remove("hidden");
          buttomFinalizarPedidoDepois.classList.add("hidden");
     }

     
}



function alteraQtdPedido(){
     console.log(pratoSelecionado);
     let quantidadeSelecionado = buttomFinalizarPedido.querySelector("span");

     if (pratoSelecionado === true || bebidaSelecionada === true || sobremesaSelecionada === true) {
          qtd = 1;
          
     }
     if (pratoSelecionado === true && bebidaSelecionada === true || bebidaSelecionada === true && sobremesaSelecionada === true || sobremesaSelecionada === true && pratoSelecionado === true){
          qtd = 2;
     }    

     if (pratoSelecionado === false && bebidaSelecionada === false && sobremesaSelecionada === false){
          qtd = 0;
     }



     console.log(qtd)
     
     quantidadeSelecionado.innerHTML = qtd;
     
}



function prosseguirPedido(){

     if (pratoSelecionado === false || bebidaSelecionada == false || sobremesaSelecionada == false){
          alert("Faltou selecionar um item");
     }else {
          popupFinalizarPedido()
     }

}


function zeraTudo(){
     pedidoFirstPlate[0].classList.remove("border-check");
     pedidoFirstPlate[1].classList.remove("border-check");
     pedidoFirstPlate[2].classList.remove("border-check");
     pedidoSecondPlate[0].classList.remove("border-check");
     pedidoSecondPlate[1].classList.remove("border-check");
     pedidoSecondPlate[2].classList.remove("border-check");
     pedidoThirdPlate[0].classList.remove("border-check");
     pedidoThirdPlate[1].classList.remove("border-check");
     pedidoThirdPlate[2].classList.remove("border-check");
     
     inputNomeCliente.value = "";
     inputEnderecoCliente.value = "";
     pratoSelecionado = false;
     bebidaSelecionada = false;
     sobremesaSelecionada = false;
     qtd = 0;

     

     if (pratoSelecionado === false || bebidaSelecionada === false || sobremesaSelecionada === false){
          buttomFinalizarPedido.classList.remove("hidden");
          buttomFinalizarPedidoDepois.classList.add("hidden");
     }
     alteraQtdPedido()

     popupCancelarPedido(containerInfoCliente);
     buttonsInfoCliente.classList.remove("hidden");
     textInfoFinalizaPedido.classList.add("hidden");
}

function infoClientes(){
     containerInfoCliente.classList.remove("hidden");
     popupCancelarPedido(popupFinalizarPedidoText);
}

function finalizarPedido(){
     
     nome = inputNomeCliente.value;
     endereco = inputEnderecoCliente.value;
     let mensagem;
     let valorTotal = calculaValores().toFixed(2);
     
     
     

     if (nome === "" || endereco === "" || nome === null || endereco === null){
          mensagem =  `
          Olá, gostaria de fazer o pedido:
          - Prato: ${prato}
          - Bebida: ${bebida}
          - Sobremesa: ${sobremesa}
          Total: R$ ${valorTotal}`

          window.open(`https://wa.me/+5521999999999?text=${encodeURIComponent(mensagem)}`);
     }else {
          mensagem = `
          Olá, gostaria de fazer o pedido:
          - Prato: ${prato}
          - Bebida: ${bebida}
          - Sobremesa: ${sobremesa}
          Total: R$ ${valorTotal}
          
          
          Nome: ${nome}
          Endereço: ${endereco}`
          
          window.open(`https://wa.me/+5521999999999?text=${encodeURIComponent(mensagem)}`);
     }
          
     popupInfoFinalizaPedido();

     setTimeout(zeraTudo , 5000);
     
}

function popupCancelarPedido(popup){
     popup.classList.add("hidden");
}



function popupFinalizarPedido(){
     nomePratoFinalizarPedido.innerHTML = prato;
     valorPratoFinalizarPedido.innerHTML = "R$ " + valorPrato.toFixed(2);
     nomeBebidaFinalizarPedido.innerHTML =  bebida;
     valorBebidaFinalizarPedido.innerHTML = "R$ " + valorBebida.toFixed(2);
     nomeSobremesaFinalizarPedido.innerHTML = sobremesa;
     valorSobremesaFinalizarPedido.innerHTML = "R$ " + valorSobremesa.toFixed(2);
     valorTotalFinalizarPedido.innerHTML = "R$ " + calculaValores().toFixed(2);

     popupFinalizarPedidoText.classList.remove("hidden");
}

function popupInfoFinalizaPedido(){
     buttonsInfoCliente.classList.add("hidden");
     textInfoFinalizaPedido.classList.remove("hidden");
}


