const addForm = document.querySelector('.add');
//get refernce of UL and ready for inject
const list = document.querySelector('.todos');
//get the search form and the input element
const search =document.querySelector('.search input');


//insert in to HTML Template function
    const createTemplate =(todo) =>{
        //create <li> HTML Template adn insert the user input
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
         </li>
        `;
        //inject 'html' string into ul and do not overwrite html page via using "+="
        list.innerHTML += html;
    };

//addForm EventListener
addForm.addEventListener('submit',e =>{
  
    e.preventDefault();
        //add form without Whitespace
        const todo = addForm.add.value.trim();
        //check if  user only input Empty value
            if(todo.length){
                
                createTemplate(todo);
            }else{
                alert("Oops,Your input cannot be empty");
            };
            //clear and reset the input from
            addForm.reset();
});
//  delete function, find the <delete> insidie the ul
list.addEventListener ('click', e => {
    if(e.target.classList.contains('delete')){
        //DOM find elemnts parent and remove() the target element
        e.target.parentElement.remove();
    }
});

 
//keyup event
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
} );
//filter todos function
const filterTodos =(term)=>{
    //convert HTML collection to Array to use filter method
    Array.from(list.children)
    //'todo' here means each of 'li' tags
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))   
    //filtered anyting included the search term & applied 'filtered' into html 
    .forEach((todo) => todo.classList.add('filtered'));

    //remove items when we get mathed
    Array.from(list.children)
    //get the elements which they do match
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))  
    //remove the  filtered class
    .forEach((todo) => todo.classList.remove('filtered'));

 } ;

   
