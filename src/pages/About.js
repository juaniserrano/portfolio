import Footer from '../components/Footer';
import Error from './Error';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '66px',
  border: '1px solid lightblue',
  textAlign: 'center',
  fontSize: '3rem',
  height: '95vh',
  flexDirection: 'column',
};
export default function About() {
  return (
    <div>
      <div>
        <div style={divStyle}>
          <Error />
        </div>
        <Footer />
      </div>
    </div>
  );
}
