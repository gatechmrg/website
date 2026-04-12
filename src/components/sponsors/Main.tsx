import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Current from "./Sponsors";
import Previous from "./Previous";
import { AquaFund } from "./aquafund";

export default function Main() {
  const tankContainerRef = useRef<HTMLDivElement | null>(null);
  const aquaFundRef = useRef<AquaFund | null>(null);

  useEffect(() => {
    if (!tankContainerRef.current) return;

    aquaFundRef.current = new AquaFund({
      container: tankContainerRef.current,
      goal: 10000,
      raised: 4500,
      numFish: 18,
    });

    return () => {
      aquaFundRef.current?.destroy();
      aquaFundRef.current = null;
    };
  }, []);

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
            <Previous />
            <Box
              ref={tankContainerRef}
              sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 4, mb: 4 }}
            />
        </Box>
    )
}