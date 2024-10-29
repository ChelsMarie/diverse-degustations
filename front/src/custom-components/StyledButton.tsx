import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import { forwardRef } from 'react';

const StyledButton = styled(Button)(({ }) => ({
    boxShadow: 'none !important',
    border: 'none !important',
    borderRadius: '0px !important',
    backgroundColor: 'transparent',
    height: 'calc(100%) !important',

    '&:focus': {
        backgroundColor: 'var(--mui-palette-primary-light) !important',
    },
    '&:hover': {
        backgroundColor: 'var(--mui-palette-primary-light) !important',
    },
    '&:active': {
        backgroundColor: 'var(--mui-palette-primary-light) !important',
    }
}));

type NavButtonProps = ButtonProps & {
    children?: React.ReactNode;
};


const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
    ({ children, ...props }, ref) => {
        return (
            <StyledButton
                {...props} // Spread the remaining props
                ref={ref} // Pass the ref to StyledButton
                disableRipple={true}
            >
                {children}
            </StyledButton>
        );
    }
);



export default NavButton;


