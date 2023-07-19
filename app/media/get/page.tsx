'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function MediaGet() {
    return (
        <main className="main">
            <Header>Get</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Media Element" size="small" /> endpoint
                        returns detailed information about a specific media
                        object uploaded using the Assets endpoints. To use this
                        endpoint, you must provide the identifier for the media
                        object {"you're"} interested in as well as the media
                        type. The request should be sent as a{' '}
                        <Chip label="GET" size="small" /> request to the
                        <Chip
                            label="/v1/api/assets/{MEDIA_TYPE}/
              {MEDIA_IDENTIFIER}"
                            size="small"
                        />{' '}
                        endpoint, with the necessary authorization and
                        content-type headers included.
                    </p>
                    <p>
                        If {"you're"} unsure about the available options for the
                        <Chip label="MEDIA_IDENTIFIER" size="small" />, you can
                        refer to the <Chip label="Assets" size="small" />
                        section of the API documentation to retrieve information
                        about existing media objects.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'GET https://api.oxolo.com/v1/api/assets/{MEDIA_TYPE}/{MEDIA_IDENTIFIER}'
                        }
                    </code>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{result}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const result = `{
  "results": {
    "path": "s3://...",
    "type": "IMAGE",
    "id": "bf4a8d8a-5379-4189-b1d0-24aec8e81e30",
    "created_at": "2023-03-08T09:13:20.401Z",
    "updated_at": "2023-03-08T09:13:20.401Z",
    "name": "81949956-ebc8-443e-afc6-b1ba41e9d699_image.png"
  }
}`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/assets/IMAGE/{MEDIA_IDENTIFIER}' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 
"https://api.oxolo.com/v1/api/assets/IMAGE/{MEDIA_IDENTIFIER}"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url=
 'https://api.oxolo.com/v1/api/assets/IMAGE/{MEDIA_IDENTIFIER}';

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
