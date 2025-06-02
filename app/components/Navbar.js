'use client';
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

// Styled Components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#333',
  '&:hover': {
    backgroundColor: '#444',
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: 250,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

// Navigation items
const navItems = [
  { label: 'Categories', href: '/categories' },
  { label: 'Personalization', href: '/personalization' },
  { label: 'Order', href: '/order' },
  { label: 'Gift Store', href: '/giftstore' },
];

export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Check for mobile screen

  const handleMoreClick = (event) => setAnchorEl(event.currentTarget);
  const handleMoreClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar (Header) */}
      <AppBar position="static" sx={{ backgroundColor: '#2a2a2a' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Mobile Menu Button */}
            {isMobile ? (
              <IconButton sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : null}

            {/* Logo (Click redirects to home page) */}
            <Link href="/" passHref>
              <Box sx={{ cursor: 'pointer' }}>
                <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[...navItems, { label: 'More', onClick: handleMoreClick }].map((item) =>
                  item.href ? (
                    <Link key={item.label} href={item.href} passHref>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'white',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                            textDecorationColor: 'limegreen',
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      key={item.label}
                      variant="body1"
                      onClick={item.onClick}
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                          textDecorationColor: 'limegreen',
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  )
                )}
              </Box>
            )}
          </Box>

          {/* Right Side - Search, Profile, Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Search Input (Desktop only) */}
            {!isMobile && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: 'white' }} />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" />
              </Search>
            )}

            {/* Profile Icon */}
            <IconButton sx={{ color: 'white' }}>
              <PersonOutlineIcon />
            </IconButton>

            {/* Cart Icon */}
            <IconButton sx={{ color: 'white' }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <ListItem button>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Link>
            ))}
            <ListItem button onClick={handleMoreClick}>
              <ListItemText primary="More" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Dropdown Menu for 'More' */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMoreClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={handleMoreClose}>
          <Link href="/daily-deals">Daily Deals</Link>
        </MenuItem>
        <MenuItem onClick={handleMoreClose}>
          <Link href="/blogs">Blogs</Link>
        </MenuItem>
        <MenuItem onClick={handleMoreClose}>
          <Link href="/career">Career</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
