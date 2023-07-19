'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function MediaGetAll() {
    return (
        <main className="main">
            <Header>Get All</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Media Assets" size="small" /> endpoint
                        allows you to retrieve a list of all media objects
                        uploaded to your account. To use this endpoint, you must
                        provide the necessary authorization headers. The request
                        should be sent as a GET request to the{' '}
                        <Chip label="/v1/api/assets/media " size="small" />
                        endpoint, with the <Chip label="skip " size="small" />
                        and <Chip label="take" size="small" /> query parameters
                        specifying the range of media objects
                        {"you're"} interested in. The resulting identifier is to
                        be used in the media fields of the create endpoint.
                    </p>
                    <p>
                        If {"you're"} unsure about the available options for the
                        skip and take parameters, you can refer to the Assets
                        section of the API documentation to retrieve information
                        about pagination and filtering options.
                    </p>

                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>GET https://api.oxolo.com/v1/api/assets/media</code>
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
  "results": [
      {
          "id": "{MEDIA_IDENTIFIER}"
      }
  ]
}`;
const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/assets/media?skip=0&take=100' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= "https://api.oxolo.com/v1/api/assets/media"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
params = {
    "skip": 0,
    "take": 100
}
requests.get(url, headers=headers, params=params).json()`;

const node = `const fetch = require('node-fetch');

const url= 
"https://api.oxolo.com/v1/api/assets/media";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};
const params = new URLSearchParams({
  "skip": 0,
  "take": 100
});

fetch('\${url}?\${params}', { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
