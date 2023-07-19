'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from '../shared/header/header';

export default function Catalogue() {
    return (
        <main className="main">
            <Header>Catalogue</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        The <Chip label="Catalogue section" size="small" /> of
                        the Oxolo API documentation provides endpoints that
                        allow you to retrieve information about actors, voices,
                        templates, and music tracks available in our catalogue.
                        These endpoints can be used to get a list of available
                        options or to retrieve information about specific items
                        that you may be interested in using for your video
                        creation.
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
