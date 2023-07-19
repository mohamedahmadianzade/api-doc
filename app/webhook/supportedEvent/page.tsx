'use client';
import './page.css';

import Grid from '@mui/material/Grid';

import Header from '../../shared/header/header';

export default function SupportedEvent() {
    return (
        <main className="main">
            <Header>Supported Event</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        Our API currently supports the following event triggers:
                    </p>

                    <ul style={{ marginBottom: 5 }}>
                        <li>
                            {
                                "- User credit: Triggered when a user's credit changes."
                            }
                        </li>
                        <li>
                            - Video status changes: Triggered when the status of
                            a video changes, including when it is created,
                            fails, or successfully completes.
                        </li>
                        <li>
                            - Video progress: Triggered when there is a change
                            in the video creation process.
                        </li>
                        <li>
                            - all: This option registers all the above events
                            for a user in one go.
                        </li>
                    </ul>
                    <p>
                        For each event, the system will send a notification to
                        the provided webhookUrl using the specified
                        webhookUrlMethod.
                    </p>
                    <p>
                        {`Remember, integrating our API into your platform is a
              straightforward process, but if you encounter any challenges or need
              further clarification, don't hesitate to contact us..`}
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
