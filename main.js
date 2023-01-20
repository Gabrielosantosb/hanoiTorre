const torre1 = document.getElementById("torre1");
const torre2 = document.getElementById("torre2");
const torre3 = document.getElementById("torre3");
const fimJogo = document.querySelector(".fimJogo")
let movimentos = document.querySelector(".movimentos")

const botaoResetar = document.getElementById("botaoResetar")
botaoResetar.addEventListener("click", () =>{
    location.reload()})







/*Criando discos e Tela fim de jogo*/




const disco1 = document.createElement("div");
disco1.className = "disco1 d1";

const disco2 = document.createElement("div");
disco2.className = "disco2 d2";


const disco3 = document.createElement("div");
disco3.className = "disco3 d3";

const disco4 = document.createElement("div");
disco4.className = "disco4 d4";


torre1.appendChild(disco4)
torre1.appendChild(disco3);
torre1.appendChild(disco2);
torre1.appendChild(disco1);


/*---------------------------------------------*/ 

let ct = 0
let discoArray = []



function selecionarDiscor(event){
    
    discoArray.push(event.currentTarget);
    if (discoArray.length === 1) {
      ct += 1
      movimentos.innerHTML = "Movimentos: " + ct;
      event.currentTarget.lastElementChild.style.marginBottom = "80px";
    }

      if (discoArray.length === 2) {
        
        if (discoArray[1].lastElementChild === null) {
          discoArray[0].lastElementChild.style.marginBottom = "0";
          discoArray[1].appendChild(discoArray[0].lastElementChild);
          discoArray.length = 0;

        } else if (discoArray[0].lastElementChild.clientWidth <= discoArray[1].lastElementChild.clientWidth){
           
            discoArray[0].lastElementChild.style.marginBottom = "0";
            discoArray[1].appendChild(discoArray[0].lastElementChild);
            discoArray.length = 0;

        } else if (discoArray[0].lastElementChild.clientWidth > discoArray[1].lastElementChild.clientWidth){
          
          discoArray[0].lastElementChild.style.marginBottom = "0";
          discoArray.length = 0;
        }
        if (torre3.children.length === 4) {
          fimJogo.style.display = "flex"
          ct -= 1
        }
      }
    }
    
    




torre1.addEventListener("click", selecionarDiscor);
torre2.addEventListener("click", selecionarDiscor);
torre3.addEventListener("click", selecionarDiscor);




