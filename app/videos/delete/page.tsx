'use client';
import './page.css';

import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';
export default function DeleteVideo() {
    return (
        <main className="main">
            <Header>Delete a video</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to delete a video in your account by
                        identifier. Retrieve the identifier via one of the other
                        endpoints.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'DELETE https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/del'
                        }
                    </code>
                    <Alert severity="error" sx={{ mt: 3 }}>
                        Deleting a video using the endpoint is a permanent
                        action and cannot be undone. Please make sure you have
                        backed up any important videos before using this
                        endpoint. If you have any questions or concerns about
                        deleting videos from your account, please {"don't"}{' '}
                        hesitate to [contact us](mailto:support@oxolo.ai).{' '}
                        {"We're"} here to help.
                    </Alert>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{'{"results": "{VIDEO_IDENTIFIER}"}'}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'DELETE' 
  'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/del' 
  -H 'accept: application/json' 
  -H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 
'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/del'

headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.delete(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url=
 'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}/del';

const headers = {
  'accept': 'application/json',
  'authorization': 'YOUR_API_KEY'
};

fetch(url, { method: 'DELETE', headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
