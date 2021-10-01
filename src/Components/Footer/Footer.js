import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <>
            <Container fluid className="footer">
                <Row xs={12} md={12}>
                    <Col>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                                <HomeIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton aria-label="cart" color="primary" className="ms-3 me-3">
                                <StyledBadge badgeContent={1} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                                <LoginIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                                <LogoutIcon />
                            </IconButton>

                        </Link>

                    </Col>
                </Row>

            </Container>

            <Container fluid className="footer-two">
                <Row xs={1} md={4}>

                    <Col>
                        <h5>Get to know us</h5>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3 ">
                                <FacebookIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3 ">
                                <InstagramIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                                <YouTubeIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3">
                                <GoogleIcon />
                            </IconButton>

                        </Link>
                        <Link variant="primary" to="" >
                            <IconButton color="primary" aria-label="add to shopping cart" className="me-3 ">
                                <TwitterIcon />
                            </IconButton>

                        </Link>

                    </Col>
                    <Col>
                        <h5 className="text-center">Our payment method</h5>
                        <Row xs={2} md={2}>
                          
                            <Col className="text-end  ">
                                <Link className="anchor">Visa Card</Link  >

                                <br />
                                <Link className="anchor">Master Card</Link  >

                                <br />
                                <Link className="anchor">Paypal</Link >
                            </Col>
                            <Col className="text-center">
                                <Link className="anchor">Bkash</Link  >
                                <br />
                                <Link className="anchor">Nagad</Link  >
                                <br />
                                <Link className="anchor">Cash On Delivery</Link  >
                            </Col>
                        </Row>
                    </Col>
                    <Col>

                        <h5 className="text-center">Let Us Help You</h5>

                        <Link className="anchor">Your Account </Link >
                        <br />
                        <Link className="anchor">Your orders</Link  >
                        <br />
                        <Link className="anchor">Your Query </Link  >
                        <br />
                        <Link className="anchor">Help </Link  >





                    </Col>
                    <Col>
                        <h5 className="text-center">Condition Of Use</h5>
                        <Link className="anchor">Privacy Notice</Link  > <br />
                        <Link className="anchor">Terms</Link  ><br />
                        <Link className="anchor">Policy</Link ><br />
                        <Link className="anchor">Conditions</Link >
                    </Col>
                </Row>
            </Container>

        </>


    );
};

export default Footer;