import { Box } from "@mui/material";
import Current from "./Current";

export default function Main() {
    
    return (
        <Box>
            <Current />
            {/* Multi-layer wave */}
            <Box sx={{ position: 'relative', width: '100%', height: 100, overflow: 'hidden', marginTop: '-100px' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g>
                        <use xlinkHref="#gentle-wave" x="100" y="6" fill="rgba(0, 53, 102, 1)" />
                        <use xlinkHref="#gentle-wave" x="452" y="6" fill="rgba(0, 53, 102, 1)" />
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            from="0,0"
                            to="-352,0"
                            dur="14s"
                            repeatCount="indefinite"
                        />
                    </g>
                </svg>
            </Box>
        </Box>
    )
}