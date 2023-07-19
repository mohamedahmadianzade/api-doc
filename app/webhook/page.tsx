'use client';
import './page.css';

import Grid from '@mui/material/Grid';

import Header from '../shared/header/header';

export default function Webhook() {
    return (
        <main className="main">
            <Header>Webhook</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        Welcome to the Webhooks section of the Oxolo API
                        documentation! The power of webhooks lets external
                        systems communicate with the Oxolo platform, enabling
                        them to be alerted when specific events occur within our
                        system.
                    </p>
                    <p>
                        {`To facilitate this, each external system must first be registered to
              receive a unique token for communication. Subsequently, each system
              can register its users by providing certain information (such as
              user's API key and event name), ensuring that when the specified
              event is triggered for that user on the Oxolo platform, the system
              will be notified by calling the webhookUrl which was provided during
              the registration phase.`}
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
