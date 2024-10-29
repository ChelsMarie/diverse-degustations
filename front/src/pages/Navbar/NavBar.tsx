import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Button, ListItem, Menu, MenuItem, Switch, Typography, useColorScheme } from "@mui/material";
import './index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavButton from "../../custom-components/StyledButton";

function NavBar() {
    const { mode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const myRef = useRef<HTMLButtonElement | null>(null);
    const buttonWidth = myRef?.current?.clientWidth ?? null;

    useEffect(() => {
        console.log("Button width: ", buttonWidth, 'px');
    }, [buttonWidth]);

    const toggleTheme = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <nav id="navContainer">
                <div id="navLinksDiv" >
                    <ListItem className="navListItem">
                        <Link className="navLink" to="/">
                            <img id="logo" alt="No logo" src={Logo}></img>
                        </Link>
                    </ListItem>

                    <ListItem className="navListItem">

                        <NavButton
                            variant="contained"
                            onClick={handleClickMenu}
                            aria-controls={menuOpen ? 'positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={menuOpen ? 'true' : undefined}
                            endIcon={<KeyboardArrowDownIcon color="error" style={{ marginLeft: '-5px' }} />}
                            className="linkButton"
                            ref={myRef}
                            disableFocusRipple={true}
                            disableTouchRipple={true}
                        >

                            <Typography className="linkText" variant="h6">
                                Eating
                            </Typography>

                            <Menu
                                open={menuOpen}
                                onClose={handleCloseMenu}
                                className="eatingMenu"
                                anchorEl={anchorEl}
                            >
                                <MenuItem>All</MenuItem>
                                <MenuItem>Michelin</MenuItem>
                                <MenuItem>Café</MenuItem>
                                <MenuItem>Eatery</MenuItem>
                                <MenuItem>Desserts</MenuItem>

                            </Menu>

                            {/* <Link className="navLink" to="/eating">
      
                            </Link> */}
                        </NavButton>
                    </ListItem>



                    <ListItem className="navListItem">
                        <Link className="navLink" to="/wearing">
                            <Typography variant="h6">
                                Wearing
                            </Typography>

                        </Link>
                    </ListItem>

                    <ListItem className="navListItem">
                        <Link className="navLink" to="/links">
                            <Typography variant="h6">
                                Links
                            </Typography>
                        </Link>
                    </ListItem>

                    <ListItem className="navListItem">
                        <Link className="navLink" to="/contact">
                            <Typography variant="h6">
                                Contact
                            </Typography>
                        </Link>
                    </ListItem>

                    <Switch
                        onChange={toggleTheme}
                    />
                </div>

            </nav>
        </>
    )
}

export default NavBar;