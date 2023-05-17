import { AppBar, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

const pages = [
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Sponsors', link: '/sponsors'},
    {name: 'Join Us', link: '/join-us'}
]

export default function Header() {

    return (
        <AppBar position="sticky" sx={{bgcolor: "background.default"}}>
            <Box mx={3} py={1}>
                <Grid container alignItems="center">
                    <Grid item>
                        <Link href="/">
                            <Box>
                                <img src="/mrg_logo.png" alt="MRG Logo"
                                    height={60} />
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item flex={1} />
                    {pages.map(page => (
                        <Grid item key={page.name}>
                            <Link href={page.link}>
                                <Box ml={5} sx={{':hover': {color: "primary.main"}}}>
                                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                                        {page.name}
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </AppBar>
    )
}