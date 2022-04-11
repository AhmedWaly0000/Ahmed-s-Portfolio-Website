import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I'm Ahmed Waly. <br />
          Welcome To My <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        Check out my projects and learn more about me! 
        </SectionText>
        <Button onClick={() => window.location = 'mailto:awaly0000@gmail.com'}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;