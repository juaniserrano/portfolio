import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.webp';

const projects = [
  {
    id: uuidv4(),
    name: 'Selfty Shirt - Web Ecommerce',
    desc:
      'Ecommerce website for a local clothing store. Built with Node.js, Express.js',
    img: ProjectImg,
  },
];

export default projects;
