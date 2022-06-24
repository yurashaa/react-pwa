import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/mountains.jpeg';
import BlockImage from '../../assets/mountain-2.jpeg';

const HeroBlock = styled.div`
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 3rem;
`

const HeroText = styled.div`
  font-size: 4rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
  
  &::before, &::after {
    content: '';
    width: 5rem;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
  }

  &::after {
    right: 0;
    bottom: 0;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  
  @media screen and (max-width: 880px) {
    max-width: min-content;
  }
`

const SectionBlock = styled.section`
  display: flex;
  justify-content: center;
`

const Section = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  
  div {
    flex: 1 1 0px;
    min-width: 200px;
  }
`

const ImageBlock = styled.div`
  padding: 30px;
  
  & > img {
    width: 100%;
  }
`

const TextBlock = styled.div`
  padding: 30px;
`

const StaticPage = () => {
    return (
        <>
            <HeroBlock>
                <HeroText>
                    Discover power of mountains
                </HeroText>
            </HeroBlock>

            <SectionBlock>
                <Section>
                    <ImageBlock>
                        <img src={BlockImage} alt="mountain"/>
                    </ImageBlock>
                    <TextBlock>
                        <h3>Mountain</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </TextBlock>
                </Section>
            </SectionBlock>
        </>
    )
}

export { StaticPage };