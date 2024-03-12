const ul = document.createElement('ul');
const listItem = [
    'List item number 1',
    'List item number 2',
    'List item number 3',
]
listItem.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);