const btnOpenDropdown = document.querySelector('.button-menu');
const btnCloseDropdown = document.querySelector('.close-dropdown');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown');
const dekstopDropdownBtn = document.querySelector('.dropdown-btn');
const dekstopDropdownMenu = document.querySelector('.dropdown');
const projectDropdown = document.querySelector('.project-dropdown');

btnOpenDropdown.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('hidden');
})

btnCloseDropdown.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('hidden');
})

dekstopDropdownBtn.addEventListener('click', () => {
    dekstopDropdownMenu.classList.toggle('hidden');
})

projectDropdown.addEventListener('click', () => {
    document.querySelector('.project-dropdown-menu').classList.toggle('hidden');
})

