$(()=>{

//click on each city
  $("button").on('click',(e)=>{
    let cityName= $(e.currentTarget).val().toUpperCase();

//define limit number of complaint
    let limit = $('#complintNumber').val();
    if(limit === ""){
        limit = 10;
    }   
    $('#listOfComplaint').children().remove();
    
//call data from API
    $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&agency=NYPD&borough=${cityName}`,
        method: "GET",
        header: {
            "X-App-Token" : "jPwdY42Uw34WUtu9NyNwQWanZ"

        }
    })
    .then((complaint)=>{
        console.log(complaint);
        
        for(let i=0; i<complaint.length; i++) {
           const list = $(`<li id="list">${complaint[i].complaint_type}</li>`)
            $('#listOfComplaint').append(list);
            const toggleBtn = $('<button class="btn btn-danger float-right policeResponse">WHAT DID THE POLICE DO?</button>');  
            list.append(toggleBtn);


            toggleBtn.on('click',(e)=>{
                list.append(`<p id=${complaint[i].unique_key}>${complaint[i].resolution_description}</p>`);
                //toggle button doesnt work, needs more investigation.
                // if((`#${complaint[i].unique_key}`).length> 0){
                //     $('p').remove();
                // }else{
                    
                // }
                
                   
            })

            // for (let i=0; i<list.length; i++){
            //     console.log(complaint[i].resolution_description);
            // }
        }
    },
    (error)=>{
        console.log("error", error);
    }
    )

}) 

})