const nameList = document.createElement('ul');
names = [
    'Nguyen Van A',
    'Nguyen Van B',
    'Nguyen Van C',
];
names.forEach(name => {
    const listItem = document.createElement('li');
    listItem.innerHTML = name;
    nameList.appendChild(listItem);
});
document.body.appendChild(nameList);