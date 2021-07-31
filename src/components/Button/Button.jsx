import React from 'react';

import { StyledButton } from './styles';

const Button = (props) => {
    const { children, type } = props

    return (
        <StyledButton type={type}>{children}</StyledButton>
    )
}

export default Button