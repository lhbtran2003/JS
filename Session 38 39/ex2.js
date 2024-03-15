const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

let isExpanded = false;

searchIcon.addEventListener('click', function() {
    if (!isExpanded) {
        searchIcon.style.left = '170px'; 
        searchInput.style.width = '180px';
        searchInput.style.padding = '5px 15px'; 
        searchInput.focus(); 
    } else {
        searchIcon.style.left = '10px'; 
        searchInput.style.width = '0'; 
        searchInput.style.padding = '0';
        searchInput.value = ''; 
    }
    
    isExpanded = !isExpanded; 
});
