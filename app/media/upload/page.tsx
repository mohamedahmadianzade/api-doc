'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function MediaUpload() {
    return (
        <main className="main">
            <Header>Upload</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Upload Media" size="small" /> endpoint
                        is used to upload media to the Oxolo platform. This is
                        primarily used in conjunction with the Create endpoints
                        to provide media assets for videos. To use this
                        endpoint, you must provide a media file and its type in
                        a multipart/form-data request. The request should be
                        sent as a
                        <Chip label="POST" size="small" />
                        request to the{' '}
                        <Chip
                            label="/v1/api/assets/media/request"
                            size="small"
                        />
                        endpoint, with the necessary authorization and
                        content-type headers included.
                    </p>

                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'POST https://api.oxolo.com/v1/api/assets/media/request'
                        }
                    </code>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{'{"results": "{MEDIA_IDENTIFIER}"}'}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'POST' 
'https://api.oxolo.com/v1/api/assets/media/request' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY' 
-H 'content-type: multipart/form-data' 
-F 'media_type=IMAGE' 
-F 'file=@image.png;type=image/png'`;

const python = `import requests

url=
 "https://api.oxolo.com/v1/api/assets/media/request"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
data = {
    "media_type": "IMAGE"
}
files = {
    "file": ("image.png", open("image.png", "rb"), "image/png")
}
requests.post(url, headers=headers, data=data, files=files).json()`;

const node = `const fetch = require('node-fetch');

const FormData = require('form-data');
const fs = require('fs');

const url=
 "https://api.oxolo.com/v1/api/assets/media/request";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};
const formData = new FormData();
formData.append('media_type', 'IMAGE');
formData.append('file', 
fs.createReadStream('image.png'), 'image.png');

fetch(url, { method: 'POST', headers, body: formData })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
