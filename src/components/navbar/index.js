import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SigninIcon from "../../Assets/signinIcon.png"
import Logo from "../../Assets/Logo.png"
import { useNavigate } from "react-router-dom";
import KeyIcon from "../../Assets/keyIcon.png"
import BMCredential from '../../pages/BMCredential';
import approved from "../../Assets/approved.png";
import pending from "../../Assets/pending.png";
import reject from "../../Assets/reject.png";
import Dashboard from "../../Assets/dashboard.png";
// import { Authentication } from '../../config/Firebase';
import { getAuth, signOut } from "firebase/auth";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const BMData = () => {
    navigate("/bmsignup")
  }
  const PendingData = () => {
    navigate("/pending")
  }
  const ApprovedData = () => {
    navigate("/approved")
  }
  const RejectData = () => {
    navigate("/reject")
  }
  const BMCredentialData = () => {
    navigate("/bmcredential")
  }
  const DashboardData = () => {
    navigate("/verifyTab")
  }
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem button onClick={DashboardData}>
            <ListItemIcon>
              <img src={Dashboard} alt='Dashboard' style={{ height: 20, width: 20 }} />
            </ListItemIcon>
            <strong>Dashboard</strong>
          </ListItem>
          <Divider />
          <ListItem button onClick={PendingData}>
            <ListItemIcon>
              <img src={pending} alt='PendingIcon' style={{ height: 20, width: 20 }} />
            </ListItemIcon>
            Pending Requests
          </ListItem>
          <ListItem button onClick={ApprovedData}>
            <ListItemIcon>
              <img src={approved} alt='ApprovedIcon' style={{ height: 20, width: 20 }} />
            </ListItemIcon>
            Approved Requests
          </ListItem>
          <ListItem button onClick={RejectData}>
            <ListItemIcon>
              <img src={reject} alt='rejectIcon' style={{ height: 20, width: 20 }} />
            </ListItemIcon>
            Rejected Requests
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={BMData}>
            <ListItemIcon>
              <img src={SigninIcon} alt='SignUpIcon' style={{ height: 20, width: 20 }} />
            </ListItemIcon>
            Branch Manager SignUp
          </ListItem>
          <ListItem button onClick={BMCredentialData}>
            <ListItemIcon>
              <img src={KeyIcon} alt='Credential' style={{ height: 25, width: 25 }} />
            </ListItemIcon>
            Branch Manager Credential
          </ListItem>
          <Divider />
          <ListItem button onClick={handleSignOut}>
            <ListItemIcon>
              <img src={KeyIcon} alt='Credential' style={{ height: 25, width: 25 }} />
            </ListItemIcon>
            Logout
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
