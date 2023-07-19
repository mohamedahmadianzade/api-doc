'use client';
import './page.css';

import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import CodeBox from '../shared/codeBox/codeBox';
import Header from '../shared/header/header';

export default function Authentication() {
    return (
        <main className="main">
            <Header>Authentication</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        {`To use the Oxolo API, you need to obtain an API key from oxolo.com.
              Once you've logged in, navigate to your user symbol and click on
              "API Keys". Copy the API key to use it in your requests.`}
                    </p>
                    <Image
                        alt="api key"
                        height={0}
                        sizes="100vw"
                        src="https://api.oxolo.com/images/api_key-e6d1fc36.png"
                        style={{ width: '100%', height: 'auto' }}
                        width={0}
                    />
                    <p>
                        Include your API key in all requests in the header with
                        the key authorization. You will find examples on the
                        right side of this documentation in various languages.
                    </p>

                    <p>
                        <Alert severity="info" sx={{ mt: 3 }}>
                            Replace YOUR_API_KEY with your actual API key.
                        </Alert>
                        <Alert severity="info" sx={{ mt: 3 }}>
                            All endpoints in this documentation require
                            authentication.
                        </Alert>
                    </p>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                </Grid>
            </Grid>
        </main>
    );
}

const python = `import requests

url = 
"https://api.oxolo.com/v1/api/account/credits"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/account/credits' 
-H 'accept: application/json' \
-H 'authorization: YOUR_API_KEY'`;
const node = `const fetch = require('node-fetch');

const url = 
"https://api.oxolo.com/v1/api/account/credits";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err))`;
