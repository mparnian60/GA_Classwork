
// function clickOnImage (image) {
//       $('img').on('click',()=>{

//         const id = $(e.currentTarget).val();
          
//         const imageInput = $(`<img id='${giph.data[i].id}' src="${gif}" height='200px' width='200px'/>`);
//         $('#imag').append(imageInput)

//       })
      
// }


$(()=>{

$('#entryBtn').on('click',()=>{

    const dataEntry = $('#entry').val();
    $('#imag').children().remove();
    
    // console.log(dataEntry);

        $ .ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${dataEntry}&api_key=a5rvm7W1OnVBtsd0qfqCy5G7WlsBIzPu&rating&rating=PG-13&limit=5`,
            method: "GET",
            crossDomain: true
        })
        .then((giph)=>{
            
            for(let i=0; i<giph.data.length; i++){
                const gif = giph.data[i].images.original.url;
                // const iframeGif = giph.data[i].embed_url;// embed is compatibale with iframe

                const imageInput = $(`<img id='${giph.data[i].id}' src="${gif}" class='gifImg'/>`).on('click',()=>{
                    console.log(gif);
                    $('#notWantedImage').children().remove();
                    $('#imag').append(`<img id='${giph.data[i].id}' src="${gif}" class='gifImg'/>`);

                });

                $('#notWantedImage').append(imageInput)//bring giph as an image
               

                // $('#imag').append(`<iframe src="${iframeGif}" > </iframe>`); //iframe 

                // clickOnImage(imageInput);
               
            }

            $("#clearBtn").on('click', () => {
                $('#imag').empty();
                $('#notWantedImage').empty();
            });
    
            console.log(giph);
            // console.log(giph.data[1].id)

        }).catch((e)=>{
            console.log(e)
        })

    })

})

