'use client';
import './page.css';

import ApiIcon from '@mui/icons-material/Api';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from '../../shared/header/header';
export default function ImageResizing() {
    return (
        <main className="main">
            <Header>Image Resizing</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        Our CDN endpoint now includes an automatic image resize
                        (thumbnail) mechanism. This feature allows you to easily
                        add the desired image size to the CDN path as a suffix.
                        For instance, if you want to resize an actor image, you
                        can do so by adding the dimensions after the image URL
                        like so:
                        <Chip
                            label="https://media.oxolo.com/actors/0000f13e-4a15-4e4e-b496-94ec6e0ae60d.png-200x120."
                            size="small"
                        />
                    </p>
                    <p>You can specify the image size in one of three ways:</p>
                    <div style={{ paddingBottom: 10, paddingLeft: 15 }}>
                        <div className="row">
                            <ApiIcon />
                            <span className="rowSpan">
                                <Chip label="widthxheight" size="small" />
                                to set predefined dimensions
                            </span>
                        </div>
                        <div className="row">
                            <ApiIcon />
                            <span className="rowSpan">
                                <Chip label="0xheight" size="small" />
                                to set a predefined height, with the width
                                calculated automatically to maintain the aspect
                                ratio
                            </span>
                        </div>
                        <div className="row">
                            <ApiIcon />
                            <span className="rowSpan">
                                <Chip label="widthx0" size="small" />
                                to set a predefined width, with the height
                                calculated automatically to maintain the aspect
                                ratio
                            </span>
                        </div>
                    </div>
                    <p></p>
                </Grid>
            </Grid>
        </main>
    );
}
