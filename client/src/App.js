import {
    AppBar,
    Box,
    Button,
    CssBaseline, Divider,
    Drawer, Hidden,
    IconButton,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function App() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
    <>
      <CssBaseline />
      <div className="App">
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
                          News
                      </Typography>
                      <Button color="inherit">Login</Button>
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
      </div>
    </>

  );
}

export default App;
