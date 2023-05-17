import { Box } from "@mui/material";

interface StandardLineProps {
    width: number;
    height: number;
    centered?: boolean;
    borderRadius?: number;
}

export function StandardLine({width, height, centered, borderRadius}:StandardLineProps) {

    return (
        <Box textAlign={centered ? 'center' : 'left'}>
            <Box display="inline-block" width={width} height={height} bgcolor="primary.main"
            borderRadius={borderRadius || 0} />
        </Box>
    )
}