function queryAPI(borough){
    let limit= $('#input-limit').val();
    if(limit === ""){
        limit = 10;
    }

    //make an ajax call to NYC API
    $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&borough=${borough.toUpperCase()}&agency=NYPD`,
        method: "GET",
        headers: {
            "X-App-Token" : 'jPwdY42Uw34WUtu9NyNwQWanZ'
        }
    })
    .then((response)=>{
        console.log(response);
        console.log(`there are ${response.length} result for Borough ${borough}`);

        response.forEach(complaint => {
            console.log(complaint.complaint_type);
            
        });

        drawComplaint(response);
        
    })
    .catch((error)=> console.log(error));
}

function drawComplaint(complaint){
    const complaintList = $('#list-complaints');
    complaintList.children().remove();

    complaint.forEach((complaint)=>{
        const li = $(`<li class="list-group-item">${complaint.complaint_type}</li>`)//${complaint.complaint_type}
        const toggleBtn = $(`<button class="btn btn-danger float-right">Show description</button>`).on('click', (e)=>{
            // if(li.children().length >1) {

            //     li.children().toArray().forEach((child, index)=> {
            //         if($(child).is('p')){
            //         $(child).remove();
            //         }
            //     })
                
            // }else{
            //     li.append(`<p>${complaint.resolution_description}</p>`);
            // }
            //other way of having toggle with id which is unique key then it's cleaner solution

            if($(`#${complaint.unique_key}`).length > 0) {
                $(`#${complaint.unique_key}`).remove();
            }
            else {
                li.append(`<p id='${complaint.unique_key}'>${complaint.resolution_description}</p>`);
            }
            
        });

        li.append(toggleBtn);
        complaintList.append(li);

        
    });

}



//on ready
$(()=>{



$('.cityButton').on('click',(e)=>{
    const cityElement = $(e.currentTarget);//current target as jquery object
    const cityValue = cityElement.attr('city');// value of 'city' attribute
    console.log(cityValue);

    queryAPI(cityValue);
})

})