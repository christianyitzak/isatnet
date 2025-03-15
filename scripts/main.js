const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');
const mobileDropdownClose = document.querySelector('.mobile-dropdown-close');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');

if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
};

if (mobileDropdownButton && mobileDropdownMenu) {
    mobileDropdownButton.addEventListener('click', () => {
        mobileDropdownMenu.classList.remove('hidden');
    });
};

if (mobileDropdownClose && mobileDropdownMenu) {
    mobileDropdownClose.addEventListener('click', () => {
        mobileDropdownMenu.classList.add('hidden');
    })
};