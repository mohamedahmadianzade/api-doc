'use client';
import './page.css';

import { Alert } from '@mui/material';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function MediaDelete() {
    return (
        <main className="main">
            <Header>Delete</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Delete Media" size="small" /> Object
                        endpoint is used to remove an existing media object from
                        your Oxolo account. To use this endpoint, you must
                        provide the identifier for the media object you want to
                        delete. The request should be sent as a{' '}
                        <Chip label="DELETE" size="small" /> request to the{' '}
                        <Chip
                            label="/v1/api/assets/media/{MEDIA_IDENTIFIER}"
                            size="small"
                        />
                        endpoint, with the necessary authorization and
                        content-type headers included.
                    </p>

                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'DELETE https://api.oxolo.com/v1/api/assets/media/{MEDIA_IDENTIFIER}'
                        }
                    </code>
                    <Alert severity="error" sx={{ mt: 3 }}>
                        Deleting a media object using the endpoint is a
                        permanent action and cannot be undone. Please make sure
                        you have backed up any important media objects before
                        using this endpoint.
                    </Alert>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{'{"results": "success"}'}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'DELETE' 
'https://api.oxolo.com/v1/api/assets/media/{MEDIA_IDENTIFIER}' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url=
 "https://api.oxolo.com/v1/api/assets/media/{MEDIA_IDENTIFIER}"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.delete(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url=
 'https://api.oxolo.com/v1/api/assets/media/{MEDIA_IDENTIFIER}';

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { method: 'DELETE', headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
