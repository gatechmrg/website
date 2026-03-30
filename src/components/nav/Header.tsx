import { AppBar, Box, Drawer, Grid, IconButton, List, ListItem, Typography, useMediaQuery, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const pages = [
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
    {name: 'Newsletter', link: '/newsletter'},
    {name: 'Sponsors', link: '/sponsors'},
    {name: 'Join Us', link: '/join-us'}
]

const projectLinks = [
    { name: 'Microtransat', link: '/projects/microtransat' },
    { name: 'RoboBoat', link: '/projects/roboboat' },
    { name: 'RoboSub', link: '/projects/robosub' },
    { name: 'RobotX', link: '/projects/robotx' },
]

export default function Header() {

    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))

    const [openDrawer, setOpenDrawer] = useState(false)
    const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null)

    const handleProjectsOpen = (e: React.MouseEvent<HTMLElement>) => setProjectsAnchor(e.currentTarget)
    const handleProjectsClose = () => setProjectsAnchor(null)

    return (
        <AppBar position="sticky" sx={{bgcolor: "#ffffff", height: '80px'}}>
            <Box mx={3} py={1}>
                <Grid container alignItems="center">
                    <Grid item>
                        <Link href="/">
                            <Box  sx={{display: 'flex', alignItems: 'center', p: .5}}>
                                <Image src="/mrg_wordmark.svg" alt="MRG Logo" width={95} height={55} />
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item flex={1} />
                    {mdUp ? 
                        pages.map(page => {
                            if (page.name === 'Projects') {
                                return (
                                    <Grid item key={page.name}>
                                        <Box ml={5} sx={{display: 'flex', alignItems: 'center', gap: .5}}>
                                            <Link href={page.link}>
                                                <Typography variant="body1" sx={{fontSize: '1.2rem', cursor: 'pointer'}}>
                                                    {page.name}
                                                </Typography>
                                            </Link>

                                            <IconButton size="small" onClick={handleProjectsOpen} aria-label="Open projects menu">
                                                <KeyboardArrowDownIcon />
                                            </IconButton>

                                            <Menu
                                                anchorEl={projectsAnchor}
                                                open={Boolean(projectsAnchor)}
                                                onClose={handleProjectsClose}
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                            >
                                                {projectLinks.map(p => (
                                                    <MenuItem key={p.name} component={Link} href={p.link} onClick={handleProjectsClose}>
                                                        {p.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>
                                    </Grid>
                                )
                            }
                            return (
                                <Grid item key={page.name}>
                                    <Link href={page.link}>
                                        <Box ml={5} sx={{':hover': {color: "primary.main"}}}>
                                            <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                                                {page.name}
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            )
                        })
                        :
                        <Grid item>
                            <IconButton onClick={() => setOpenDrawer(true)} 
                                aria-label="Page navigation menu button">
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