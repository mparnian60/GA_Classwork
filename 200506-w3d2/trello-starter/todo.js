const todoArray = [];
const doneArray = [];

const moveToDoList = (event) =>{
    event.preventDefault();
    console .log ("Form submitted!");
    const todoItem = $('#toDoField').val();
    todoArray.push(todoItem);
    console.log("todoArray", todoArray);

    $('#todoList').append('<li>'+todoItem+'</li>');
    // it works but check with Pradosh if there is anything wrong with above code

    $('#todoList li').on('click', moveTodoTodone)
}

const moveTodoTodone = (event)=>{
    console.log('event', event);
    // why this does loop and repeat each item based on the size of teh array???
    const itemValue = event.currentTarget.textContent;
    console.log(itemValue);
    doneArray.push(itemValue);
    console.log('doneArray', doneArray);
    $('#doneList').append(event.currentTarget);

    $('#doneList li').on('click', removeItem);
}


const removeItem = (event) =>{
    event.target.remove();
}


$('form').on('submit',moveToDoList);
