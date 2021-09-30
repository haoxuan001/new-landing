class Forecast {
    constructor(){
      this.key = "YuCxz76lcUrf56kKtpn9eItLYoVzfYME";
      this.weatherURI ='https://dataservice.accuweather.com/currentconditions/v1/';
      this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
      const cityDets = await this.getCity(city);
      const weather = await this.getWeather(cityDets.Key);
      return { cityDets, weather };
    }
    async getWeather(id){
      const query = `${id}?apikey=${this.key}`;
      const response = await fetch(this.weatherURI + query);
      const data = await response.json();
      return data[0];
    }
    async getCity(city){
      const query = `?apikey=${this.key}&q=${city}`;
      const response = await fetch(this.cityURI + query);
      const data = await response.json();
      return data[0];
    }
  }
    
    
    /*BEFORE USE constructor() */
    
    // const key ="YuCxz76lcUrf56kKtpn9eItLYoVzfYME";
    // // get weather information
    // const getWeather = async (id) => {
      
    //     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    //     const query = `${id}?apikey=${key}`;
      
    //     const response = await fetch(base + query);
    //     const data = await response.json();
      
    //     return data[0];
      
    //   };
      
    //   // get city information
    //   const getCity = async (city) => {
      
    //     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    //     const query = `?apikey=${key}&q=${city}`;
      
    //     const response = await fetch(base + query);
    //     const data = await response.json();
      
    //     return data[0];
      
    //   };
