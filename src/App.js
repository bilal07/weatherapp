import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather'


const API_KEY = "0e9c0128601738c96d5c69615fdff435";

class App extends Component {
  
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`);
    const data = await api.json();
    
    if(city & country) {
      this.setState({
        temperature: this.data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].desctription,
        error: ''
      })
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: ''
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
