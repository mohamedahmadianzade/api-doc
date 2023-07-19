import './page.css';

import { Grid } from '@mui/material';

import Header from '../shared/header/header';

export default function Media() {
    return (
        <main className="main">
            <Header>Media</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        The Assets endpoints allow you to upload media objects
                        such as images to use with the Create endpoints. The
                        primary use of these endpoints is to provide the images
                        that are used to generate videos. Currently, we only
                        support the IMAGE type, and you can upload images using
                        POST. Once uploaded, you can use the image identifiers
                        in the request payloads when using the Create endpoints.
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
