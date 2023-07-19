'use client';
import './page.css';

import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function VideoStatus() {
    return (
        <main className="main">
            <Header>Get video status</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to retrieve the status of a specific
                        video. You can use this to check if a video is done or
                        still in progress.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'GET https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/status'
                        }
                    </code>

                    <Alert severity="warning" sx={{ mt: 3 }}>
                        At this time, our API does not support custom callbacks
                        during the video creation process. If you want to check
                        the status of a video and see if it is complete, you
                        will need to call the endpoint periodically until the
                        video is done. We understand that custom callbacks can
                        be a useful feature for some users, and we are working
                        to add support for this in the future. In the meantime,
                        please check the status endpoint regularly to stay
                        updated on the progress of your videos.
                    </Alert>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{'{"results": "done"}'}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/status' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 
'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/status'

headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url= 
'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/status';

const headers = {
  'accept': 'application/json',
  'authorization': 'YOUR_API_KEY'
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
