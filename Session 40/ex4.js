const localStorageData = document.getElementById('localStorageData');

const allKeys = Object.keys(localStorage);

if (allKeys.length > 0) {
    allKeys.forEach(key => {
        const value = localStorage.getItem(key);
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        localStorageData.appendChild(listItem);
    });
} else {
    const listItem = document.createElement('li');
    listItem.textContent = 'LocalStorage is empty.';
    localStorageData.appendChild(listItem);
}
