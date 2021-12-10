const addForm = document.querySelector('.add');
//get the reference for th 'UL' element
const list = document.querySelector('.todos');
//get the search form and the input element
const search =document.querySelector('.search input');

const generateTemplate = todo =>{
//create new HTML template & inject into the UL
    const html =`
     <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</i>
    </span>
    <i class="far fa-trash-alt delete"></i>
     </li>
     `;
   //append the html
    list.innerHTML += html;
};


    addForm.addEventListener('submit', function(event){
        event.preventDefault();
         //User typing result and skip SPACE
        const todo = addForm.add.value.trim();
     // if .length return true(the length must be positive which means user do input something)
        if(todo.length){
             // passing user typed result 
            generateTemplate(todo);
             //rest the input field inside the form
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
      //convert HTML collections  to Array
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
