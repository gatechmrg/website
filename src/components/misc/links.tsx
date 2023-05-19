import { Typography, typographyClasses } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
    href: string;
    as?: string;
    openInNewTab?: boolean;
    children: ReactNode;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit";
    fontSize?: string; 
}

export function PrimaryLink({children, href, as, openInNewTab, ...typographyProps}:LinkProps) {

    return (
        <Link href={href} as={as} target={openInNewTab ? '_blank' : undefined}>
            <Typography sx={{
                transition: 'color 300ms',
                '&:hover': {
                    color: 'primary.dark'
                }
            }} display="inline" {...typographyProps} color="primary.main">
                {children}
            </Typography>
        </Link>
    )
}

export function SecondaryLink({children, href, as, openInNewTab, ...typographyProps}:LinkProps) {

    return (
        <Link href={href} as={as} target={openInNewTab ? '_blank' : undefined}>
            <Typography sx={{
                transition: 'color 300ms',
                '&:hover': {
                    color: 'primary.dark'
                }
            }} display="inline" {...typographyProps}>
                {children}
            </Typography>
        </Link>
    )
}