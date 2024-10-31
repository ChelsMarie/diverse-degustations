import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { ListItem, Menu, MenuItem, Switch, Typography, useColorScheme } from "@mui/material";
import './index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavButton from "../../custom-components/StyledButton";

function NavBar() {
    const { mode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const myRef = useRef<HTMLButtonElement | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);


    const toggleTheme = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setActiveButton('eating');
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setActiveButton(null);
    };


    return (
        <>
            <nav id="navContainer">
                <div id="navLinksDiv" >
                    <NavButton className="navListItem" sx={{ backgroundColor: 'transparent !important' }}>
                        <ListItem>
                            <Link className="navLink" to="/">
                                <img id="logo" alt="No logo" src={Logo}></img>
                            </Link>
                        </ListItem>
                    </NavButton>

                    <NavButton
                        onClick={handleClickMenu}
                        aria-controls={menuOpen ? 'positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon color="error" style={{ marginLeft: '-5px' }} />}
                        className={`navListItem ${activeButton === 'eating' ? 'active' : ''}`} // Conditionally add 'active' class
                        ref={myRef}
                    >

                        <ListItem >

                            <Typography className="linkText" variant="h4">
                                Eating
                            </Typography>



                            {/* <Link className="navLink" to="/eating">
        
                            </Link> */}
                        </ListItem>

                    </NavButton>

                    <NavButton className="navListItem">
                        <ListItem>
                            <Link className="navLink" to="/wearing">
                                <Typography variant="h4" className="linkText">
                                    Wearing
                                </Typography>

                            </Link>
                        </ListItem>
                    </NavButton>

                    <NavButton className="navListItem">
                        <ListItem>
                            <Link className="navLink" to="/links">
                                <Typography variant="h4" className="linkText">
                                    Links
                                </Typography>
                            </Link>
                        </ListItem>
                    </NavButton>

                    <NavButton className="navListItem">
                        <ListItem>
                            <Link className="navLink" to="/about">
                                <Typography variant="h4" className="linkText">
                                    About
                                </Typography>
                            </Link>
                        </ListItem>
                    </NavButton>

                    <Switch
                        onChange={toggleTheme}
                    />

                    <Menu
                        open={menuOpen}
                        onClose={handleCloseMenu}
                        className="eatingMenu"
                        anchorEl={anchorEl}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        MenuListProps={{
                            sx: { width: anchorEl && anchorEl.offsetWidth }
                        }}

                        slotProps={{
                            paper: {
                                sx: {
                                    '--Paper-overlay': 'none !important'
                                },
                            },
                        }}
                    >
                        <MenuItem className="menuItemText"> <Typography variant="subtitle1"> All </Typography></MenuItem>
                        <MenuItem className="menuItemText"> <Typography variant="subtitle1"> Michelin </Typography></MenuItem>
                        <MenuItem className="menuItemText"> <Typography variant="subtitle1"> Café </Typography></MenuItem>
                        <MenuItem className="menuItemText"> <Typography variant="subtitle1"> Eatery </Typography></MenuItem>
                        <MenuItem className="menuItemText"> <Typography variant="subtitle1"> Desserts </Typography></MenuItem>

                    </Menu>
                </div>

            </nav>
        </>
    )
}

export default NavBar;