'use client';
import './page.css';

import Grid from '@mui/material/Grid';

import Header from '../../shared/header/header';

export default function UserRegister() {
    return (
        <main className="main">
            <Header>User Register</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        Once {"you've"} obtained your system ID, you can proceed
                        with user registration. The information {"you'll"} need
                        to provide for user registration includes:
                    </p>

                    <ul>
                        <li>
                            - system ID: The unique identifier for your system.
                        </li>
                        <li>
                            - {"user's"} API key: A unique key assigned to each
                            user upon registration on Oxolo.com. This key can be
                            accessed through the user settings menu on our
                            platform.`
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </main>
    );
}
