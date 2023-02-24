import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.webp';
import selftyShirtImg from '../images/selftyshirt.png';
import pokemonAppImg from '../images/pokemonApp.png';
import weatherAppImg from '../images/weatherApp.png';
import Java from '../images/java.png';
import Python from '../images/python.png';
import Portfolio from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Selfty Shirt - Web Ecommerce',
    desc:
      'Ecommerce website for a local clothing store. Built with Node.js, Express.js, Sequelize, EJS, pure CSS and Bootstrap.',
    img: selftyShirtImg,
    link: 'https://selftyshirt.herokuapp.com/',
    repo: 'https://github.com/juaniserrano/grupo_3_selftyshirt',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'This is my personal portfolio. Built with React.js, and styled with styled-components. This shows some of the projects I have done and my skills.',
    img: Portfolio,
    link: 'https://selftyshirt.herokuapp.com/',
    repo: 'https://github.com/juaniserrano/grupo_3_selftyshirt',
  },
  {
    id: uuidv4(),
    name: 'Pokeapp',
    desc:
      'Next.js Project that uses the PokeAPI to display Pokemon data, the styles are styled with styled-components and tailwindcss',
    img: pokemonAppImg,
    link: 'https://pokemon-next-js-juaniserrano.vercel.app/',
    repo: 'https://github.com/juaniserrano/pokemon-next-js',
  },
  {
    id: uuidv4(),
    name: 'Dashboard Selfty Shirt',
    desc:
      'Dynamic dashboard for the Selfty Shirt Ecommerce website. Using API to collect data and display it in a chart in a friendly way to the user.',
    img: selftyShirtImg,
    repo: 'https://github.com/juaniserrano/SelftyShirt-Dashboard-React',
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
    desc:
      'This is a Java Game, that you basically play golf and the main objective is to show my knowledge of Java, OOP and collisions',
    img: Java,
    gitlab: 'https://gitlab.com/juanserrano/cardozo-misico-serrano',
  },
  {
    id: uuidv4(),
    name: 'Letris',
    desc:
      'This is a Python Game, made with Pygame. The game is pretty similar to Tetris, but you need to make a word to score points',
    img: Python,
    gitlab: 'https://gitlab.com/santiagodelafuente/Letris',
  },
];

export default projects;
