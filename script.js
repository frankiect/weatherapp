const apiKey = 'bfd723830b59c52067da108a378280c1'

$(document).ready(function(){
  $('form').submit(function(event) {event.preventDefault(); })

  $('button').click(function(){
    const city = $('input').val();
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, function(data) {
      console.log(data)
      $('article').prepend(`
        <div class="cityweather">
        <h4>${data.name}, ${data.sys.country}</h4>
        <h2>15 <sup>&#8451;</sup></h2>
        <h5>${data.weather[0].description}</h5>
          <div class="weather">
            <p><b>Feels like:</b> ${data.main.feels_like}<sup>&#8451;</sup></p>
            <p><b>Min. Temp:</b> ${data.main.temp_min}<sup>&#8451;</sup></p>
            <p><b>Max Temp:</b> ${data.main.temp_max}<sup>&#8451;</sup><p>
            <p><b>Humidity:</b> ${data.main.humidity}<sup>&#8451;</sup></p>
            <p><b>Wind Speed:</b> ${data.wind.speed} km/h</p>
          </div>
          </div>
        `)
    })


  })

})
