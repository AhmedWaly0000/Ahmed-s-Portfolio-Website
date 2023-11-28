import React from 'react';
import { AiFillGithub, AiFillFolder, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(619)534-4077">619-534-4077</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:awaly0000@gmail.com">
          awaly0000@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Growing each day to become a better Frontend developer</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/AhmedWaly0000">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/maged-waly-jr/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="UpdatedResumeFeb2022.pdf">
            <AiFillFolder size="3rem" />
           
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
