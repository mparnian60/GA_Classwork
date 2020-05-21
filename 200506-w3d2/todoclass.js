const toDoList = [];
const onToDoFromSubmit = (event) => {
    event.preventDefault();

    const todo = $("#todoname").val();

    toDoList.push(todo);
    console.log ("todolist" , toDoList)

    render();
}

const eachItem = (toDoItem) => {
    console.log('todo item', toDoItem)
    $('ul').append('<li>'+ toDoItem +'</li>');
}

const render = () => {
   $('ul').empty();
   //we don't call eachItem itself
   //eachItem is a callback function that is being called through loop
   //each time for each function excecuted, this function is called as well
    toDoList.forEach(eachItem);  // for each is like for loop ,it goes through array

}
$("form").on("submit", onToDoFromSubmit);

