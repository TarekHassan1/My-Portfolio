import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (

  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,title,description,image,tags,source,visit})=> {
        return (
          <BlogCard key={id}>
            <img src={image} alt="" />
            <TitleContent>
              <HeaderThree title>
                {title}
              </HeaderThree>
              <Hr />

            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => {
                  return (
                   <Tag key={i}>
                    {tag}
                  </Tag>
                  )
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>
                SrcCode
              </ExternalLinks>
              <ExternalLinks href={visit}>
                Take a Look !
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      })}


    </GridContainer>
</Section>
);

export default Projects;