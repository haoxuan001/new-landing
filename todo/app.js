const addForm = document.querySelector('.add');

const list = document.querySelector('.todos');

const search =document.querySelector('.search input');

const generateTemplate = todo =>{

    const html =`
     <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}<i class="fas fa-edit edit"></i>
    </span>
    <i class="far fa-trash-alt delete"></i>
     </li>
     `;
    //add new html to the list
    list.innerHTML += html;
};


    addForm.addEventListener('submit', function(event){
        event.preventDefault();
        const todo = addForm.add.value.trim();
    
        if(todo.length){
            generateTemplate(todo);
            addForm.reset();
        }
    
    });

    //delete 
    list.addEventListener('click',event=>{
        if(event.target.classList.contains('delete')){
            event.target.parentElement.remove();
        }
    });
    //update
    list.addEventListener('cilck',event=>{
        if(event.target.classList.contains('edit')){
            event.target.parentElement.remove();
        }
    });
    //filter method
    const filterTodos = (term)=>{

        Array.from(list.children)
            .filter((todo)=> !todo.textContent.toLowerCase().includes(term))   
            .forEach((todo) => todo.classList.add('filtered'));

        Array.from(list.children)
            .filter((todo)=> todo.textContent.toLowerCase().includes(term))   
            .forEach((todo) => todo.classList.remove('filtered'));
    };

    //keyup event
    search.addEventListener('keyup', ()=>{
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
    });