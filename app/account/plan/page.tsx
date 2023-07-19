'use client';
import './page.css';

import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';
import { Box } from '@mui/material';

export default function Plan() {
    return (
        <Box
            className="main"
            sx={{
                padding: {
                    xs: 0,
                    md: 3,
                },
            }}
        >
            <Header>Plan</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to retrieve information about your
                        current Oxolo plan. HTTP Request
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>GET https://api.oxolo.com/v1/api/account/plan</code>
                </Grid>

                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{ressult}</ResultBox>
                </Grid>
            </Grid>
        </Box>
    );
}
const ressult = `{
  "results": "1 × Personal 25M (at $29.99/month)"
}`;
const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/account/plan' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= "https://api.oxolo.com/v1/api/account/plan"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url= 
"https://api.oxolo.com/v1/api/account/plan";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
