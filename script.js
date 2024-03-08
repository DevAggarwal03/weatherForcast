//heading : state Name
//temp: ?
//humidity: ?
//what is the weather today(sunny/cloudy)
//a vector to discribe the weather
//background gradient changes as per the weather

async function getWeather(){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=zip=110-078,in&appid={API key}`);
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}