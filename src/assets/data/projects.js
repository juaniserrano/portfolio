import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.webp';
import selftyShirtImg from '../images/selftyshirt.png';
import pokemonAppImg from '../images/pokemonApp.png';
import weatherAppImg from '../images/weatherApp.png';
import Java from '../images/java.png';
import Python from '../images/python.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Selfty Shirt - Web Ecommerce',
    desc:
      'Ecommerce website for a local clothing store. Built with Node.js, Express.js',
    img: selftyShirtImg,
    link: 'https://selftyshirt.herokuapp.com/',
    repo: 'https://github.com/juaniserrano/grupo_3_selftyshirt',
  },
  {
    id: uuidv4(),
    name: 'Pokeapp',
    desc: 'Next js project for a pokemon API',
    img: pokemonAppImg,
    link: 'https://pokemon-next-js-juaniserrano.vercel.app/',
    repo: 'https://github.com/juaniserrano/pokemon-next-js',
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc:
      'Simple app that show the weather based on your current location, using Weather API, Vanilla JS and Pure CSS',
    img: weatherAppImg,
    repo: 'https://github.com/juaniserrano/weather-app',
  },
  {
    id: uuidv4(),
    name: 'Golf Java',
    desc: 'Next js project for a pokemon API',
    img: Java,
    gitlab: 'https://gitlab.com/juanserrano/cardozo-misico-serrano',
  },
  {
    id: uuidv4(),
    name: 'Letris',
    desc: 'Next js project for a pokemon API',
    img: Python,
    gitlab: 'https://gitlab.com/santiagodelafuente/Letris',
  },
];

export default projects;
