import axios from 'axios';

export const weatherAPI = {
  get: () => axios.get('https://api.openweathermap.org/data/2.5/forecast?id=554234&units=metric&lang=ru&APPID=3232b4d4a41e715204b4e51216fc82f5')
};
