const btnOpenDropdown = document.querySelector('.button-menu');
const btnCloseDropdown = document.querySelector('.close-dropdown');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown');

btnOpenDropdown.addEventListener('click', () => {
    if (mobileDropdownMenu.classList.contains('hidden')) {
        mobileDropdownMenu.classList.remove('hidden');
    }
})

btnCloseDropdown.addEventListener('click', () => {
    if (!mobileDropdownMenu.classList.contains('hidden')) {
        mobileDropdownMenu.classList.add('hidden');
    }
})