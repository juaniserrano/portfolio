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
    name: 'projects.name1',
    desc: 'projects.desc1',
    img: selftyShirtImg,
    link: 'https://selftyshirt.herokuapp.com/',
    repo: 'https://github.com/juaniserrano/grupo_3_selftyshirt',
  },
  {
    id: uuidv4(),
    name: 'projects.name2',
    desc: 'projects.desc2',
    img: Portfolio,
    link: 'https://selftyshirt.herokuapp.com/',
    repo: 'https://github.com/juaniserrano/grupo_3_selftyshirt',
  },
  {
    id: uuidv4(),
    name: 'projects.name3',
    desc: 'projects.desc3',
    img: pokemonAppImg,
    link: 'https://pokemon-next-js-juaniserrano.vercel.app/',
    repo: 'https://github.com/juaniserrano/pokemon-next-js',
  },
  {
    id: uuidv4(),
    name: 'projects.name4',
    desc: 'projects.desc4',
    img: selftyShirtImg,
    repo: 'https://github.com/juaniserrano/SelftyShirt-Dashboard-React',
  },
  {
    id: uuidv4(),
    name: 'projects.name5',
    desc: 'projects.desc5',
    img: weatherAppImg,
    repo: 'https://github.com/juaniserrano/weather-app',
  },
  {
    id: uuidv4(),
    name: 'projects.name6',
    desc: 'projects.desc6',
    img: Java,
    gitlab: 'https://gitlab.com/juanserrano/cardozo-misico-serrano',
  },
  {
    id: uuidv4(),
    name: 'projects.name7',
    desc: 'projects.desc7',
    img: Python,
    gitlab: 'https://gitlab.com/santiagodelafuente/Letris',
  },
];

export default projects;
