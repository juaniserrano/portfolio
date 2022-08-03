import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    padding-top: 8rem;
  }
`;
export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact me" subheading="Let's get in touch" />
        <div className="contactSection__wrapper">
          <ContactInfoItem icon={<MdLocalPhone />} text="+ 54 9 11 5502 1895" />
          <ContactInfoItem
            icon={<MdEmail />}
            text="juanignacioserranoluna@gmail.com"
          />
          <ContactInfoItem text="Buenos Aires, Argentina" />
        </div>
      </div>
    </ContactSectionStyle>
  );
}
