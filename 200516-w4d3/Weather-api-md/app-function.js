$(()=>{
    $('form').on('submit',()=>{
        event.preventDefault();
        let cityName = $('#name').val();
        let numberOfDays = $('#numberOfDays').val();

        const weatherForecast = $.ajax({
            url:`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${numberOfDays}&appid=8e06a7422d1a17c7a2934349b909615b&units=metric`
        })
        weatherForecast.then((weather) => {
            $('#result').append('<div>City:'+weather.city.name+'</div>');
                for(let i=0; i<numberOfDays; i++){
                $('#result').append(`
                    <div>temerature day ${[i+1]} : ${weather.list[i].main.temp} °C
                    <img src="https://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png"/></div>
                `)
            }
        },(error)=>{
            console.log("error",error);
        })

    })
    $('#refresh').on('click',()=>{
        $('#result').text('');
        $('#name').val('');
        $('#numberOfDays').val(0);
        //why after reset, my screen doesn't show the result- function is running ok

    })

});