import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaReact } from 'react-icons/fa';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve Worked with a range of technologies in the front-end development world.
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Exprience with <br />
            React.js With Next.js
          </ListParagraph>
    </ListContainer>
      </ListItem>
    </List>
</Section>
);

export default Technologies;
