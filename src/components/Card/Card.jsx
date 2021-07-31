import React from 'react';

import { Button } from '../Button';
import { StyledCard, Content } from './styles';

const Card = ({ 
    src, 
    title,
    description,
    btnTxt
}) => {

    return (
        <StyledCard>
            <img src={src} alt=''/>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button>{btnTxt}</Button>
            </Content>
        </StyledCard>
    )
}

export default Card