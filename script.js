const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
})