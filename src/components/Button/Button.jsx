import React from 'react';

import { StyledButton } from './styles';

const Button = (props) => {
    const { children } = props

    return (
        <StyledButton>{children}</StyledButton>
    )
}

export default Button