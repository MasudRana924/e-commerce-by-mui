import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <Container fluid className="header fixed-top ">
        <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
            <Container>
                <Navbar.Brand className="text-secondary">E-All</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="text-decoration-none mt-2 text-secondary me-3">Home</NavLink>
                        <NavLink to="/about" className="text-decoration-none mt-2 text-secondary me-3">About Us</NavLink>
                        <NavLink to="/contact" className="text-decoration-none mt-2 text-secondary me-3">Contact Us</NavLink>
                        <NavLink to="/link" className="text-decoration-none mt-2 text-secondary me-3">Links</NavLink>

                    </Nav>
                    <Nav>
                        <Input placeholder="search product here" inputProps={ariaLabel}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon className="text-primary"/>
                                </InputAdornment>
                            }

                        />
                        <NavLink to="/cart">

                            <IconButton aria-label="cart" className="ms-3 me-3 text-warning">
                                <StyledBadge badgeContent={1} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>

                        <NavLink to="/login" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                            <LoginIcon />
                        </IconButton>
                        </NavLink>

                        <NavLink to="/logout">
                            <IconButton color="primary" aria-label="add to shopping cart">
                            <LogoutIcon />
                        </IconButton>
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </Container>
    );
};

export default Header;