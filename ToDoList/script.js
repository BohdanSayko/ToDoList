const add = document.querySelector('#add');
const ul = document.querySelector('ul');
let input = document.querySelector('input')

add.addEventListener('click', () => {
    if(input.value !== '') { 
        let li = document.createElement("li");
        li.setAttribute("class", "li");
        ul.appendChild(li);

        let task = document.createElement("span");
        let buttonDone = document.createElement("button");
        let buttonDelete = document.createElement("button");

        task.innerHTML = input.value;
        buttonDelete.innerHTML = 'Delete';
        buttonDone.innerHTML = 'Done';

        li.appendChild(task);
        li.appendChild(buttonDone);
        li.appendChild(buttonDelete);

        input.value = '';

        buttonDone.addEventListener('click', () => {
            if(task.getAttribute('class') === 'done') {
                task.setAttribute('class', 'toDo');
            } else {
                task.setAttribute('class', 'done');
            }
        });

        buttonDelete.addEventListener('click', () => {
            ul.removeChild(li);
        })
    }
});
