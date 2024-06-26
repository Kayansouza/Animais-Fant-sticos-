function iniTabNav() { 
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){ 
    tabContent[0].classList.add ('ativo')

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });

    if (tabContent[index]) { // Verifica se o índice existe
        tabContent[index].classList.add('ativo');
    }
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
        tabMenu.forEach((item) => item.classList.remove('ativo')); // Remove 'ativo' dos menus
        itemMenu.classList.add('ativo'); // Adiciona 'ativo' ao menu clicado
    });
});
}

}

function initAccordion () {

document.addEventListener('DOMContentLoaded', function() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativoClass ='ativo'
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo')
  
    function activeAccordion() {
        this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo');
    }
  
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  });
}

initAccordion()