function ToggleNavMenu() {

    navList = document.querySelector('.nav-list');
    navList.style.display = (navList.style.display === 'grid') ? 'none' : 'grid';
}


function ToggleNavDropdownMenu() {

    navDropdownMenu = document.querySelector('.nav-dropdown-content');
    navDropdownMenu.style.display = (navDropdownMenu.style.display === 'grid') ? 'none' : 'grid';

}

