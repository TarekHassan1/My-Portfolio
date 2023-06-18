import React from 'react';
import { AiFillGithub,AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-111'>
            Theres No Contact Number Right now
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:1tarek1hassan1@gmail.com'>
            1tarek1hassan1@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating 1 project at a time
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/TarekHassan1'>
      <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.facebook.com/1TarekHassan1'>
      <AiFillFacebook size="3rem"/>
      </SocialIcons>
         </SocialContainer>
      </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
