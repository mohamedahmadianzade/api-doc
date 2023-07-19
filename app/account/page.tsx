'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from '../shared/header/header';

export default function Account() {
    return (
        <main className="main">
            <Header>Account</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        The Oxolo API provides two endpoints for account
                        management:
                        <Chip
                            label="/v1/api/account/plan"
                            size="small"
                        /> and{' '}
                        <Chip label="/v1/api/account/credits" size="small" /> .
                        These endpoints allow you to retrieve information about
                        your account, including your current plan and credit
                        balance.
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
