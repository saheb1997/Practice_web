document.addEventListener('DOMContentLoaded',
    ()=>{
        const cityInput = document.getElementById("city-input");
        const getWeatherBtn = document.getElementById("get-weather-btn");
        const weatherInfo = document.getElementById("weather-info");
        const cityNameDisplay = document.getElementById("city-name");
        const temperatureDisplay =  document.getElementById("temperature");
        const descriptionDisplay= document.getElementById("description");
        const errorMessageDisplay = document.getElementById("error-message");

        const API_KEY = "858eab10bdbc6f406443e00c036d2302"
        getWeatherBtn.addEventListener('click',
            async()=>{
                const city = cityInput.value.trim();
                if(!city)return;
                try{
                    const weatherData = await fetchWeatherData(city);
                    // console.log(weatherData);
                    
                    displayWeatherData(weatherData);
                }catch(error){
                    showError()
                }

            }
        )
        async function fetchWeatherData(city){
            //get the data
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const response = await fetch(url);
            // console.log(typeof response);
            // console.log('response:', response);

            // console.log(response.ok);
            
            if(!response.ok)
                throw new Error("City not found");

            const data = await response.json();
            return data;
            
            

        }

        function displayWeatherData(data){
            // console.log(data);
            const {name , main , weather} = data;
            cityNameDisplay.textContent =name;
            
            // console.log(name);
            // console.log(main.temp);
            // console.log(weather[0].description);
            
            //unlock the display
            weatherInfo.classList.remove('hidden');
            errorMessageDisplay.classList.add('hidden');
            temperatureDisplay.textContent = `Temperature : ${main.temp} `;
            descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
            
        }

        function showError(){
            weatherInfo.classList.remove('hidden');
            errorMessageDisplay.classList.remove('hidden');
        }
    }
)


