import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    display: flex;
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'Info dummy text',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
