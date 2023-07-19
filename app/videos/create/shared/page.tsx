'use client';
import './page.css';

import { Alert, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { copyToClip, CustomTabPanel } from '@/app/shared/global/global';

import Header from '../../../shared/header/header';

export default function CreateVideoSharedParameters() {
    const [val, setVal] = useState(0);
    /* eslint-disable */
    const handleTab = (e: any, newVal: number) => {
        setVal(newVal);
    };
    return (
        <main className="main">
            <Header>Shared parameters</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        <Alert severity="info" sx={{ mt: 3 }}>
                            Note: All of the Create endpoints support the
                            parameters template_id, voice_id, actor_id, and
                            music_id.
                        </Alert>
                    </p>
                    <p>
                        You can use these parameters to specify a template,
                        voice, actor, and music track to use in the video
                        creation process. If you do not specify these
                        parameters, Oxolo will use default values.
                    </p>
                    <p>
                        If you need to get the IDs for assets such as actors,
                        voices, templates, or music tracks, you can skip to the
                        Catalogue section of the API documentation. This section
                        provides endpoints that allow you to retrieve
                        information about these assets, including their IDs, and
                        use them in the video creation process.
                    </p>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Tabs
                        indicatorColor="secondary"
                        onChange={handleTab}
                        textColor="primary"
                        value={val}
                    >
                        <Tab label="shared Parameters" />
                    </Tabs>
                    <CustomTabPanel index={0} value={val}>
                        <SyntaxHighlighter
                            onClick={() => copyToClip(sharedParams)}
                            style={docco}
                            wrapLongLines={true}
                        >
                            {sharedParams}
                        </SyntaxHighlighter>
                    </CustomTabPanel>
                </Grid>
            </Grid>
        </main>
    );
}

const sharedParams = `{
  "template_id": "string",
  "voice_id": "string",
  "actor_id": "string",
  "music_id": "string",
}
`;
