import {
    AppBar,
    Box, Button,
    Drawer,
    Hidden, IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar, Typography
} from "@mui/material";
import List from "@mui/material/List";
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <Link to='settings'>
                    <ListItem button>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setDrawerOpen(!isDrawerOpen)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>
                            Movies recommendation
                        </Link>

                    </Typography>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <Link to='settings'>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Settings
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(!isDrawerOpen)}
            >
                {list()}
            </Drawer>
        </Box>
        )

}