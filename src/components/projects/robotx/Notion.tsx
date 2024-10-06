import { Box, Container, Typography } from "@mui/material";
import { PrimaryLink, SecondaryLink, TextWithIconLink } from "../../misc/links";
import { useRouter } from "next/router";
import { StandardLine } from "../../misc/line";


export default function Notion() {

    const router = useRouter(); // for programmatic navigation

    const handleRedirect = () => {
        router.push('/weekly-reports'); // navigate to the weekly reports page
    };

    return (
        <Box mt={12}>
            <Container maxWidth="xl">
                <Box textAlign="center">
                    <Typography variant="h2">
                        Visit Our Notion for Updated 2024 Full Documentation
                    </Typography>
                </Box>
                <Box mt={2} mb={5}>
                    <StandardLine width={500} height={5} centered borderRadius={3} />
                </Box>
                <Box mt={4} pb={4} display="flex" justifyContent="center">
                    <PrimaryLink href="https://gt-mrg.notion.site/GT-MRG-Team-Home-473529159696471bb0dac927b7ebe360"
                        fontSize="4.1rem" openInNewTab>
                        View Notion
                    </PrimaryLink>
                </Box>
            </Container>
        </Box>
    )
}