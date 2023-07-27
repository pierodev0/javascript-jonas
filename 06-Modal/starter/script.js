'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(boton => {
 boton.addEventListener("click",openModal)
})

btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);


document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    if(!modal.classList.contains("hidden")){
      closeModal();
    }
  }
})

function closeModal (){
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

function openModal(){
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}