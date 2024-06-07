const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

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
