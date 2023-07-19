'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from '../../shared/header/header';

export default function AudioPreview() {
    return (
        <main className="main">
            <Header>Audio Preview</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        You can now preview audio for voices in our catalogue
                        using our CDN path. To do so, simply append
                        /voices/VOICE_UUID.mp3 to the CDN path. For example, you
                        can access an audio preview using the following URL:
                        <Chip
                            label="https://media.oxolo.com/voices/0081c769-32bb-4af0-970b-aacf8bd3dca3.mp3."
                            size="small"
                        />
                    </p>
                    <p>
                        This feature enables you to preview the voice before you
                        decide to use it, ensuring it fits your requirements.
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
