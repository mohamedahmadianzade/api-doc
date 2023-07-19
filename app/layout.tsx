'use client';
import './globals.css';

import Grid from '@mui/material/Grid';
import { Inter } from 'next/font/google';

import SidebarMenu from './shared/sidebar/sidebar';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

import logo from './assets/oxolo.svg';

import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const params = useSearchParams();
    const router = useRouter();
    const [showImage, setShowImage] = useState(true);
    const [container, setContainer] = useState<() => HTMLElement>();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };
    useEffect(() => {
        if (params.get('showLogo') && params.get('showLogo') == 'false') {
            setShowImage(false);
        }
        setContainer(() => window.document.body);
    }, [params]);

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', width: '120px' }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link href="/">Oxolo</Link>
            </Typography>
            <Divider />
            <SidebarMenu />
        </Box>
    );
    // const container =
    //     window !== undefined ? () => window.document.body : undefined;
    return (
        <html lang="en">
            <head>
                <title>Api documentation</title>
            </head>
            <body className={inter.className}>
                <Box
                    sx={{
                        display: {
                            xs: 'block',
                            md: 'none',
                        },
                    }}
                >
                    <AppBar component="nav">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', sm: 'block' },
                                }}
                            >
                                MUI
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: 240,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Grid
                    className="min-h-screen"
                    container
                    sx={{
                        padding: {
                            xs: 2,
                            md: 4,
                        },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={2}
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block',
                            },
                        }}
                    >
                        {showImage && (
                            <Image
                                alt="Logo"
                                height={0}
                                onClick={() => router.push('/')}
                                src={logo}
                                style={{
                                    marginBottom: 15,
                                    width: '200px',
                                    cursor: 'pointer',
                                }}
                                width={50}
                            />
                        )}
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },
                            }}
                        >
                            <SidebarMenu />
                        </Box>
                    </Grid>
                    <Grid item sx={{ padding: 4 }} xs={12} md={10}>
                        {children}
                    </Grid>
                    <Toaster />
                </Grid>
            </body>
        </html>
    );
}
