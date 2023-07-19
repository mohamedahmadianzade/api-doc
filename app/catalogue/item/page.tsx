'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function CatalogueItem() {
    return (
        <main className="main">
            <Header>Catalogue item</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="Catalogue endpoint" size="small" />{' '}
                        returns detailed information about a specific
                        <Chip label="ACTOR" size="small" />
                        <Chip label="VOICE" size="small" />
                        <Chip label="TEMPLATE" size="small" />
                        or
                        <Chip label="MUSIC" size="small" />
                        object in the Oxolo catalogue. To use this endpoint, you
                        must provide the identifier for the object
                        {"you're"} interested in. The request should be sent as
                        a <Chip label="GET" size="small" />
                        request to the
                        <Chip
                            label="/v1/api/catalogue/{CATALOGUE_IDENTIFIER}"
                            size="small"
                        />{' '}
                        endpoint, with the necessary authorization and
                        content-type headers included.
                    </p>
                    <p>
                        If {"you're"} unsure about the available options for the
                        CATALOGUE_IDENTIFIER, you can refer to the Catalogue
                        section of the API documentation to retrieve information
                        about actors, voices, templates, and music tracks.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'GET https://api.oxolo.com/v1/api/catalogue/{CATALOGUE_IDENTIFIER}'
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
    "0dcc9cc1-db74-4188-a2f1-d7a9634b9530": {
      "description": "walking and normal talk with hand gestures and casual outfit",
      "default_voice_uuid": "4acb10b9-9033-440a-9059-e935881efecf",
      "actor_name": "Amy",
      "default_voice_id": "sara",
      "gender": "female",
      "max_video_duration": "1:00",
      "variation_name": "Casual - walking with hand gestures"
    }
  }
}`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/catalogue/{CATALOGUE_IDENTIFIER}' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url=
 "https://api.oxolo.com/v1/api/catalogue/{CATALOGUE_IDENTIFIER}"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

consturl=
 'https://api.oxolo.com/v1/api/catalogue/{CATALOGUE_IDENTIFIER}';
 
const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
