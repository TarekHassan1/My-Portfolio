import React from 'react';
import { useEffect, useRef,useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';
const skills = [
  
  "HTML",
  "CSS"
  ,"Javascript",
  "TailwindCss",
  "Sass",
  "Pugjs",
  "ReactJs",
  "NextJs"
]
const Hero = () => {
const spanRef=useRef();
  const [skill, setSkill] = useState(0);
  const [char, setChar] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  useEffect(() => {
      const mySkill = skills[skill].slice(0, char);
    if (!isDeleting) {
        spanRef.current.textContent = mySkill;
     const time1= setTimeout(() => {
        setChar((e) => e + 1)
        if (char === skills[skill].length) {
          setisDeleting(true)
          

        }
      }, 300);
      return () => clearTimeout(time1);
    } else {
      const time2 = setTimeout(() => {
        setChar((e) => e - 1)
               spanRef.current.textContent = mySkill;
        if (char === 0) {
          setisDeleting(false);
          setSkill(e=>(e+1)%skills.length)
          setChar(0)
        }
      }, 300)
      return () => clearTimeout(time2);
    }

  }, [char,skill]);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br /> Tarek Hassan&apos;s Portfolio
        </SectionTitle>
        <SectionText>
          I&apos;m a Front end web developer that is experienced in <Span ref={spanRef}>x</Span>
        </SectionText>
        <Button>
          <a style={{color:"white"}} href="#projects">
            Learn More
          </a>
        </Button>
      </LeftSection>
    </Section>
  )
};

export default Hero;