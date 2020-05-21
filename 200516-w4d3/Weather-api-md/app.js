$(() => {
    $('form').on('submit', () => {
        event.preventDefault();
        let cityName = $('#name').val();
        console.log("city name", cityName);
        let numberOfDays = $('#numberOfDays').val();

        if (numberOfDays > 0) {
            const getWeather = $.ajax({
                url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${numberOfDays}&appid=8e06a7422d1a17c7a2934349b909615b&units=metric`
            })

            getWeather.then((weather) => {
                console.log("weather", weather);
                $('#result').append('<div>City:'+weather.city.name+'</div>');
                // $('#result').append('<div>temerature:'+weather.list[1].main.temp+'<img src="https://openweathermap.org/img/wn/'+weather.list[1].weather[0].icon+'@2x.png"/></div>');
                
                //you have to write code how to show result in sceen
                for(let i=0; i<numberOfDays; i++){
                    console.log('numberOfDays', numberOfDays);
                $('#result').append(`
                    <div>temerature day ${[i+1]} : ${weather.list[i].main.temp} °C
                    <img src="https://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png"/></div>
                `)
                }

            }, (error) => {
                console.log("error", error);
            })
        }
        else {
            const getWeather = $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8e06a7422d1a17c7a2934349b909615b&units=metric`
            })

            getWeather.then((weather) => {
                console.log("weather", weather);
                $('#result').append(`
            <div>City:${weather.name}</div>
            <div>temerature:${weather.main.temp} °C
            <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/></div>
            `)

            }, (error) => {
                console.log("error", error);
            });
        }


    });

});
