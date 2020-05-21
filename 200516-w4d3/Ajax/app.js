$(() =>{
$('form').on('click', (event)=>{
event.preventDefault();
// const pram = {
//         url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//         success: (movies)=>{
//             console.log("movies", movies);
//             $('#movie-name').html(movies.Title);
//             $('#movie-actors').html(movies.Actors);
//         }
//     }
    
// $.ajax(pram);

//another way of having ajax and having promise rayher than success


const movies = $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
});

movies.then((data)=>{
    console.log("data", data);
        $('#movie-name').html(movies.Title);
        $('#movie-actors').html(movies.Actors);
    }, (error)=>{
        console.log('error', error);
        $('#error').html(data.Error);
        })
    })
});

console.log("rest of my code");



