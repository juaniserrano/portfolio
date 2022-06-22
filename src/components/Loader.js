import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';
import PText from './PText';

const LoaderStyles = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--gray-2);
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    padding-top: 7rem;
    text-align: center;
    font-size: 2.5rem;
    color: var(--gray-1);
    font-family: 'RobotoMono Regular';
  }
  .pointAnimation {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.8s linear;
    animation: backwards 0.5s linear 3;
    font-size: 5rem;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default function Loader({ status = false }) {
  if (status === true) {
    return (
      <LoaderStyles>
        <div className="container">
          <TailSpin height="15" width="80" color="grey" ariaLabel="loading" />
          <PText>
            <h3>
              <nobr>
                Loading an Amazing Portfolio
                <div className="pointAnimation">...</div>
              </nobr>
            </h3>
          </PText>
        </div>
      </LoaderStyles>
    );
  }
  return null;
}
