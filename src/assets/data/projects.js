import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.webp';
import selftyShirtImg from '../images/selftyshirt.png';
import pokemonAppImg from '../images/pokemonApp.png';
import weatherAppImg from '../images/weatherApp.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Selfty Shirt - Web Ecommerce',
    desc:
      'Ecommerce website for a local clothing store. Built with Node.js, Express.js',
    img: selftyShirtImg,
    link: 'https://selfty-shirt.com',
    repo: 'https://github.com',
  },
  {
    id: uuidv4(),
    name: 'Pokeapp',
    desc: 'Next js project for a pokemon API',
    img: pokemonAppImg,
  },
  {
    id: uuidv4(),
    name: 'WeatherApp',
    desc: 'Next js project for a pokemon API',
    img: weatherAppImg,
  },
  {
    id: uuidv4(),
    name: 'Golf Java',
    desc: 'Next js project for a pokemon API',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Letris',
    desc: 'Next js project for a pokemon API',
    img: ProjectImg,
  },
];

export default projects;
