const pedidoFirstPlate = document.querySelectorAll(".pedido-first-plate");
const pedidoSecondPlate = document.querySelectorAll(".pedido-second-plate");
const pedidoThirdPlate = document.querySelectorAll(".pedido-third-plate");
const buttomFinalizarPedido = document.querySelector(".finalizar-pedido");
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

function buttomFinalizarPedidoAlteraCor() {
     buttomFinalizarPedido.style.backgroundColor = "#32B72F";
}


function calculaValores() {
     
     return valorPrato + valorBebida + valorSobremesa;

}


function escolheBorda(pedidoAdiciona,pedidoRemove1, pedidoRemove2,selecionado){
     if (pedidoAdiciona.classList.contains("border-check")){
          selecionado = false;
          pedidoAdiciona.classList.toggle("border-check");
     }
     else {
          pedidoAdiciona.classList.add("border-check");
          pedidoRemove1.classList.remove("border-check");
          pedidoRemove2.classList.remove("border-check");
          selecionado = true;
     }

     console.log(selecionado)
     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}
function escolherPrimeiroPrato() {
     let pratoList = pedidoFirstPlate[0].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[0].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);
     

     escolheBorda(pedidoFirstPlate[0],pedidoFirstPlate[1],pedidoFirstPlate[2],pratoSelecionado);
     
     
}

function escolherSegundoPrato() {
     let pratoList = pedidoFirstPlate[1].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[1].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);


     escolheBorda(pedidoFirstPlate[1],pedidoFirstPlate[0],pedidoFirstPlate[2],pratoSelecionado);
     
    

     

}

function escolherTerceiroPrato() {



     let pratoList = pedidoFirstPlate[2].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[2].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));


     console.log(prato);
     console.log(valorPrato);


     escolheBorda(pedidoFirstPlate[2],pedidoFirstPlate[0],pedidoFirstPlate[1],pratoSelecionado);


}


function escolherPrimeiroDrink(){
     let bebidaList = pedidoSecondPlate[0].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[0].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);


     escolheBorda(pedidoSecondPlate[0],pedidoSecondPlate[1],pedidoSecondPlate[2],bebidaSelecionada);

}


function escolherSegundoDrink(){
     let bebidaList = pedidoSecondPlate[1].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;
     
     let bebidaValorList = pedidoSecondPlate[1].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     


     escolheBorda(pedidoSecondPlate[1],pedidoSecondPlate[0],pedidoSecondPlate[2],bebidaSelecionada);


}


function escolherTerceiroDrink(){
     let bebidaList = pedidoSecondPlate[2].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[2].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     
     escolheBorda(pedidoSecondPlate[2],pedidoSecondPlate[1],pedidoSecondPlate[0],bebidaSelecionada);


}

function escolherPrimeiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[0].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;

     let sobremesaValorList = pedidoThirdPlate[0].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);

     escolheBorda(pedidoThirdPlate[0],pedidoThirdPlate[1],pedidoThirdPlate[2],sobremesaSelecionada);

}

function escolherSegundaSobremesa(){
     let sobremesaList = pedidoThirdPlate[1].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[1].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);

     escolheBorda(pedidoThirdPlate[1],pedidoThirdPlate[0],pedidoThirdPlate[2],sobremesaSelecionada);


}

function escolherTerceiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[2].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[2].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);
     
     escolheBorda(pedidoThirdPlate[2],pedidoThirdPlate[0],pedidoThirdPlate[1],sobremesaSelecionada);

}

function alteraQtdPedido(){
     let quantidadeSelecionado = buttomFinalizarPedido.querySelector("span");

     if (pratoSelecionado){
          qtd += 1;
     }
     if (bebidaSelecionada){
          qtd += 1;
     }
     if (sobremesaSelecionada){
          qtd += 1;
     }
     
     quantidadeSelecionado.innerHTML = qtd;
}


function finalizarPedido(){
     

     let valorTotal = calculaValores();

     let mensagem = `
     Olá, gostaria de fazer o pedido:
     - Prato: ${prato}
     - Bebida: ${bebida}
     - Sobremesa: ${sobremesa}
     Total: R$ ${valorTotal.toFixed(2)}`

     

     if (pratoSelecionado === false || bebidaSelecionada == false || sobremesaSelecionada == false){
          alert("Faltou selecionar um item");
     }
     else {
          window.open(`https://wa.me/+5521999999999?text=${encodeURIComponent(mensagem)}`);
     }

    
     
}

alteraQtdPedido();