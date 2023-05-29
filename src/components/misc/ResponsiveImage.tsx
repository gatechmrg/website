import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface Props {
    prefix?: string;
    style?: CSSProperties;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean; 
    xs?: string | StaticImageData;
    sm?: string | StaticImageData;
    md?: string | StaticImageData;
    lg?: string | StaticImageData;
    xl?: string | StaticImageData;
}

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

export default function ResponsiveImage({prefix, style, alt, width, height, fill, ...images}:Props) {

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.only('xs'))
    const isSm = useMediaQuery(theme.breakpoints.only('sm'))
    const isMd = useMediaQuery(theme.breakpoints.only('md'))
    const isLg = useMediaQuery(theme.breakpoints.only('lg'))
    const isXl = useMediaQuery(theme.breakpoints.only('xl'))

    const getFirstImage = (breakpointIndex:number) => {
        if (images.xl && breakpointIndex > 3) return images.xl
        if (images.lg && breakpointIndex > 2) return images.lg
        if (images.md && breakpointIndex > 1) return images.md
        if (images.sm && breakpointIndex > 0) return images.sm
        if (images.xs) return images.xs
        return null
    }

    const image = getFirstImage([isXs, isSm, isMd, isLg, isXl].indexOf(true)) 

    if (!image) return null

    return (
        <Image src={image} alt={alt} width={width} height={height} fill={fill}
            style={style} />
    )
}