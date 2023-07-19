'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function Credit() {
    return (
        <main className="main">
            <Header>Credits</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to retrieve your current Oxolo credit
                        balance. Each video creation costs 5 credits.
                    </p>
                    <p>
                        If you run out of credits, you can either upgrade your
                        plan to get more credits or top up your account balance
                        with additional credits. To see an overview of the
                        available personal and enterprise plans, please visit
                        our <Chip label="pricing page." size="small" />
                    </p>
                    <p>
                        To top up your account balance, simply navigate to your
                        user symbol on oxolo.com and click on
                        <Chip label="Membership Plan." size="small" />
                    </p>
                    <p>
                        From there, you can select the amount of credits you
                        want to purchase and complete the transaction securely
                        using your existing payment method.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        GET https://api.oxolo.com/v1/api/account/credits
                    </code>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>{'{"results": 1000}'}</ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/account/credits' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 'https://api.oxolo.com/v1/api/account/credits'

headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url= 
"https://api.oxolo.com/v1/api/account/credits";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
