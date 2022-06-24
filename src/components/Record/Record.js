import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
  width: 200px;
  height: 350px;
  margin: 20px;
`

const CardText = styled.a`
  background-color: rgba(0, 0, 0, .3);
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #ffffff;
  padding: 10px 20px;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    padding-bottom: 40px;
  }
`

const Record = ({ img, href }) => {
    return (
        <Card img={img}>
            <CardText href={href} target='_blank'>
                Open full image
            </CardText>
        </Card>
    )
}

export { Record }
