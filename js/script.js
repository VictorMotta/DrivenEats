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

function buttomFinalizarPedidoAlteraCor() {
     buttomFinalizarPedido.style.backgroundColor = "#32B72F";
}


function calculaValores() {
     if (valorPrato === null || valorPrato === undefined && valorBebida === null || valorBebida === undefined && valorSobremesa === null || valorSobremesa === undefined){
          alert("Selecione um item");
     }else {
          return valorPrato + valorBebida + valorSobremesa;
     }
}

function escolherPrimeiroPrato() {
     let pratoList = pedidoFirstPlate[0].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[0].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);
     
     pedidoFirstPlate[0].classList.add("border-check");
     pedidoFirstPlate[1].classList.remove("border-check");
     pedidoFirstPlate[2].classList.remove("border-check");
     pratoSelecionado = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

     
}

function escolherSegundoPrato() {
     let pratoList = pedidoFirstPlate[1].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[1].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));
     console.log(prato);
     console.log(valorPrato);


     
     pedidoFirstPlate[0].classList.remove("border-check");
     pedidoFirstPlate[1].classList.add("border-check");
     pedidoFirstPlate[2].classList.remove("border-check");

     pratoSelecionado = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}

function escolherTerceiroPrato() {



     let pratoList = pedidoFirstPlate[2].getElementsByTagName("h1");
     prato = pratoList[0].innerText;

     let pratoValorList = pedidoFirstPlate[2].getElementsByTagName("span");
     valorPrato = parseFloat(pratoValorList[0].innerText.replace(",", "."));


     console.log(prato);
     console.log(valorPrato);

     pedidoFirstPlate[0].classList.remove("border-check");
     pedidoFirstPlate[1].classList.remove("border-check");
     pedidoFirstPlate[2].classList.add("border-check");

     pratoSelecionado = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}


function escolherPrimeiroDrink(){
     let bebidaList = pedidoSecondPlate[0].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[0].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);

     pedidoSecondPlate[0].classList.add("border-check");
     pedidoSecondPlate[1].classList.remove("border-check");
     pedidoSecondPlate[2].classList.remove("border-check");

     bebidaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}


function escolherSegundoDrink(){
     let bebidaList = pedidoSecondPlate[1].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;
     
     let bebidaValorList = pedidoSecondPlate[1].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     
     pedidoSecondPlate[0].classList.remove("border-check");
     pedidoSecondPlate[1].classList.add("border-check");
     pedidoSecondPlate[2].classList.remove("border-check");

     bebidaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}


function escolherTerceiroDrink(){
     let bebidaList = pedidoSecondPlate[2].getElementsByTagName("h1");
     bebida = bebidaList[0].innerText;

     let bebidaValorList = pedidoSecondPlate[2].getElementsByTagName("span");
     valorBebida = parseFloat(bebidaValorList[0].innerText.replace(",", "."));
     console.log(bebida);
     console.log(valorBebida);
     

     pedidoSecondPlate[0].classList.remove("border-check");
     pedidoSecondPlate[1].classList.remove("border-check");
     pedidoSecondPlate[2].classList.add("border-check");

     bebidaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

}

function escolherPrimeiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[0].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;

     let sobremesaValorList = pedidoThirdPlate[0].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);


     pedidoThirdPlate[0].classList.add("border-check");
     pedidoThirdPlate[1].classList.remove("border-check");
     pedidoThirdPlate[2].classList.remove("border-check");

     sobremesaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }
     
}

function escolherSegundaSobremesa(){
     let sobremesaList = pedidoThirdPlate[1].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[1].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);

     pedidoThirdPlate[0].classList.remove("border-check");
     pedidoThirdPlate[1].classList.add("border-check");
     pedidoThirdPlate[2].classList.remove("border-check");

     sobremesaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }

     
}

function escolherTerceiraSobremesa(){
     let sobremesaList = pedidoThirdPlate[2].getElementsByTagName("h1");
     sobremesa = sobremesaList[0].innerText;
     
     let sobremesaValorList = pedidoThirdPlate[2].getElementsByTagName("span");
     valorSobremesa = parseFloat(sobremesaValorList[0].innerText.replace(",", "."));
     console.log(sobremesa);
     console.log(valorSobremesa);
     
     pedidoThirdPlate[0].classList.remove("border-check");
     pedidoThirdPlate[1].classList.remove("border-check");
     pedidoThirdPlate[2].classList.add("border-check");

     sobremesaSelecionada = true;

     if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
          buttomFinalizarPedidoAlteraCor();
     }
     
}


function finalizarPedido(){

     valorTotal = calculaValores().toFixed(2);

     
     let mensagem = `
     Olá, gostaria de fazer o pedido:
     - Prato: ${prato}
     - Bebida: ${bebida}
     - Sobremesa: ${sobremesa}
     Total: R$ ${valorTotal}`

     console.log(mensagem);
     
}