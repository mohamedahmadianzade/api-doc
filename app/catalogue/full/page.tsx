'use client';
import './page.css';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';
export default function CatalogueFull() {
    return (
        <main className="main">
            <Header>Full catalogue</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Catalogue section" size="small" /> of
                        the API documentation provides endpoints for retrieving
                        information about available actors, voices, templates,
                        and music tracks. To use these endpoints, you must send
                        a GET request to the corresponding endpoint with the
                        necessary authorization and content-type headers
                        included. The response will contain a JSON object with a{' '}
                        <Chip label="results key" size="small" /> , which holds
                        a list of objects containing information about the
                        available objects.
                    </p>
                    <p>
                        The available options for the
                        <Chip label="filter" size="small" /> parameter are:{' '}
                    </p>
                    <div style={{ paddingBottom: 10, paddingLeft: 15 }}>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">ACTOR</span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">VOICE</span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">TEMPLATE</span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">MUSIC</span>
                        </div>
                    </div>
                    <p>
                        The take and skip parameters are optional and can be
                        used to limit the number of results returned and to
                        paginate through the available objects.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        GET https://api.oxolo.com/v1/api/catalogue?filter=ACTOR
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
      "0dcc9cc1-db74-4188-a2f1-d7a9634b9530": {
          "actor_name": "Amy",
          "..."
      }
  }
}`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/catalogue?filter=ACTOR&take=10&skip=0' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= "https://api.oxolo.com/v1/api/catalogue"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
params = {
    "filter": "ACTOR",
    "take": 10,
    "skip": 0
}
requests.get(url, headers=headers, params=params).json()`;

const node = `const fetch = require('node-fetch');

const url= "https://api.oxolo.com/v1/api/catalogue";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};
const params = new URLSearchParams({
  "filter": "ACTOR",
  "take": 10,
  "skip": 0
});

fetch(\`\${url}?\${params}\`, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
