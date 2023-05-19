import { AppBar, Box, Drawer, Grid, IconButton, List, ListItem, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import MenuIcon from "@mui/icons-material/Menu"

const pages = [
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Sponsors', link: '/sponsors'},
    {name: 'Join Us', link: '/join-us'}
]

export default function Header() {

    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    const [openDrawer, setOpenDrawer] = useState(false)

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
                    {mdUp ? 
                        pages.map(page => (
                            <Grid item key={page.name}>
                                <Link href={page.link}>
                                    <Box ml={5} sx={{':hover': {color: "primary.main"}}}>
                                        <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                                            {page.name}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                        ))
                        :
                        <Grid item>
                            <IconButton onClick={() => setOpenDrawer(true)}>
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                    }
                </Grid>
            </Box>
             <Drawer anchor="left" open={openDrawer}
                    onClose={() => setOpenDrawer(false)}>
                    <Box>
                        <List>
                            {pages.map(page => (
                                <Link href={page.link} key={page.name}>
                                    <ListItem sx={{width: 200, cursor: 'pointer', mb: 2}}>
                                        <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                                            {page.name}
                                        </Typography>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Box>
                </Drawer>
        </AppBar>
    )
}