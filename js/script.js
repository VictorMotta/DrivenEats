const pedidoFirstPlate = document.querySelectorAll(".pedido-first-plate");
const pedidoSecondPlate = document.querySelectorAll(".pedido-second-plate");
const pedidoThirdPlate = document.querySelectorAll(".pedido-third-plate");
const buttomFinalizarPedido = document.querySelector(".finalizar-pedido");
const buttomFinalizarPedidoDepois = document.querySelector(".finaliza-depois");

let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;
let qtd = 0;




function calculaValores() {    
     return valorPrato + valorBebida + valorSobremesa;
}


function escolheBorda(pedidoAdiciona,pedidoRemove1, pedidoRemove2,selecionado){
     if (pedidoAdiciona.classList.contains("border-check")){
          pedidoAdiciona.classList.toggle("border-check");
          return selecionado = false;
          
     }
     else {
          pedidoAdiciona.classList.add("border-check");
          pedidoRemove1.classList.remove("border-check");
          pedidoRemove2.classList.remove("border-check");
          return selecionado = true;

     }
     
}
function escolherPrimeiroPrato() {
     let pratoList = pedidoFirstPlate[0].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[0].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);
     

     pratoSelecionado = escolheBorda(pedidoFirstPlate[0],pedidoFirstPlate[1],pedidoFirstPlate[2],pratoSelecionado);
     
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

function escolherSegundoPrato() {
     let pratoList = pedidoFirstPlate[1].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[1].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);


     pratoSelecionado = escolheBorda(pedidoFirstPlate[1],pedidoFirstPlate[0],pedidoFirstPlate[2],pratoSelecionado);
     
    
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

function escolherTerceiroPrato() {



     let pratoList = pedidoFirstPlate[2].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[2].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));


     console.log(prato);
     console.log(valorPrato);


     pratoSelecionado = escolheBorda(pedidoFirstPlate[2],pedidoFirstPlate[0],pedidoFirstPlate[1],pratoSelecionado);

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


function escolherPrimeiroDrink(){
     let bebidaList = pedidoSecondPlate[0].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[0].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);


     bebidaSelecionada = escolheBorda(pedidoSecondPlate[0],pedidoSecondPlate[1],pedidoSecondPlate[2],bebidaSelecionada);

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


function escolherSegundoDrink(){
     let bebidaList = pedidoSecondPlate[1].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;
     
     let bebidaValorList = pedidoSecondPlate[1].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     


     bebidaSelecionada = escolheBorda(pedidoSecondPlate[1],pedidoSecondPlate[0],pedidoSecondPlate[2],bebidaSelecionada);
     
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


function escolherTerceiroDrink(){
     let bebidaList = pedidoSecondPlate[2].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[2].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     
     bebidaSelecionada = escolheBorda(pedidoSecondPlate[2],pedidoSecondPlate[1],pedidoSecondPlate[0],bebidaSelecionada);
     
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

function escolherPrimeiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[0].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;

     let sobremesaValorList = pedidoThirdPlate[0].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);

     sobremesaSelecionada = escolheBorda(pedidoThirdPlate[0],pedidoThirdPlate[1],pedidoThirdPlate[2],sobremesaSelecionada);

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

function escolherSegundaSobremesa(){
     let sobremesaList = pedidoThirdPlate[1].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[1].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);

     sobremesaSelecionada = escolheBorda(pedidoThirdPlate[1],pedidoThirdPlate[0],pedidoThirdPlate[2],sobremesaSelecionada);

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

function escolherTerceiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[2].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[2].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);
     
     sobremesaSelecionada = escolheBorda(pedidoThirdPlate[2],pedidoThirdPlate[0],pedidoThirdPlate[1],sobremesaSelecionada);

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


function finalizarPedido(){
     let nome;
     let endereço;
     let mensagem;
     let valorTotal = calculaValores();

     


     if (pratoSelecionado === false || bebidaSelecionada == false || sobremesaSelecionada == false){
          alert("Faltou selecionar um item");
     }else {
          nome = prompt("Qual seu nome?");
          endereço = prompt("Qual seu endereço?");
          
          if (nome === "" || endereço === ""){
               mensagem =  `
               Olá, gostaria de fazer o pedido:
               - Prato: ${prato}
               - Bebida: ${bebida}
               - Sobremesa: ${sobremesa}
               Total: R$ ${valorTotal.toFixed(2)}`
          }else {
               mensagem = `
               Olá, gostaria de fazer o pedido:
               - Prato: ${prato}
               - Bebida: ${bebida}
               - Sobremesa: ${sobremesa}
               Total: R$ ${valorTotal.toFixed(2)}
          
          
               Nome: ${nome}
               Endereço: ${endereço}`
          }
          

          window.open(`https://wa.me/+5521999999999?text=${encodeURIComponent(mensagem)}`);
     }

    
     
}

