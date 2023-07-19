'use client';
import './page.css';

import Grid from '@mui/material/Grid';

import Header from '../../shared/header/header';

export default function SystemRegister() {
    return (
        <main className="main">
            <Header>System Register</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        System registration is facilitated by our dedicated
                        Oxolo support team. Reach out to us to obtain your
                        system token.
                    </p>
                    <p>
                        During the system registration phase, you will provide
                        the following information:
                    </p>
                    <ul>
                        <li>
                            - webhookUrl: This is the URL that will be called
                            when an event is triggered.
                        </li>
                        <li>
                            - webhookUrlMethod: This specifies the HTTP method
                            to be used for the request (GET/POST).
                        </li>
                        <li>
                            - token: This is the unique token which will be sent
                            in the header of the request to the specified URL.
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </main>
    );
}
