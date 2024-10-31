import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const StyledButton = styled(Button)(({ }) => ({
    boxShadow: 'none ',
    border: 'none ',
    borderRadius: '0px ',
    backgroundColor: 'transparent',
    height: '80px ',
    '&:hover': {
        backgroundColor: 'var(--mui-palette-primary-light) ',
        '& .linkText': {
            color: '#DEAC4B !important'
        }
    },


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
            >
                {children}
            </StyledButton>
        );
    }
);



export default NavButton;


