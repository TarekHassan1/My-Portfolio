import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{
          display: "flex",
          alignItems: "center",
        color: "white",
        marginBottom:"20px"
        }} >
                <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>  
      </Link>
    </Div1>
    <Div2>
      <li>
        
          <NavLink href='#projects'>Projects</NavLink>

      </li>
      <li>
        
        <NavLink href="#tech">Technology</NavLink>
      </li>
     <li>
        <NavLink href="#about">About</NavLink>
      </li> 
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/TarekHassan1'>
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/1TarekHassan1'>
      <AiFillFacebook size="3rem"/>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
