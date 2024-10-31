import { Card, CardProps, styled } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const StyledCard = styled(Card)(({ theme }) => ({

    height: '250px',
    border: `2px solid ${theme.palette.text.primary}`,
    boxShadow: 'none !important',
    backgroundColor: theme.palette.secondary.light
}));

interface ContentCardProps extends CardProps { }

const ContentCard: FC<PropsWithChildren<ContentCardProps>> = ({ children, ...props }) => {
    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    );
}

export default ContentCard;
