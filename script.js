const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('button');
function addTask(){
    if (inputBox.value === '' || inputBox.value.trim().length === 0) {
        console.error('You must write something.')
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.append(span);
    inputBox.value = '';
    saveData();
};

document.getElementById('input-box').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        document.getElementById('button').click();
    }
});

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI' && e.target.classList != 'checked') {
        let litext = e.target.innerHTML;
        e.target.remove();
        let li = document.createElement('li');
        li.innerHTML = litext;
        listContainer.append(li);
        li.classList.add('checked');
        saveData();
    }
    if (e.target.classList == 'checked') {
        e.target.classList.toggle('checked');
        saveData();
    }

    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
};
showTask();