'use client';
import './page.css';

import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../../shared/header/header';
import SmallHeader from '../../../shared/smallHeader/smallHeader';

const rows = [
    [
        'template_id',
        'string',
        'The identifier of the template to use for the video creation.',
        'Yes',
    ],
    [
        'voice_id',
        'string',
        'The identifier of the voice to use for the video creation.',
        '',
    ],
    [
        'actor_id',
        'string',
        'The identifier of the actor to use for the video creation.',
        '',
    ],
    [
        'music_id',
        'string',
        'The identifier of the music track to use for the video creation.	',
        '',
    ],
    ['title', 'string', 'The title of the video.', 'Yes'],
    ['text', 'string', 'The text to display in the video.', 'Yes'],
    [
        'media',
        'string',
        'An array of asset identifiers corresponding to the images to include in the video.',
        'Yes',
    ],
];

export default function CreateVideoByForm() {
    return (
        <main className="main">
            <Header>Form</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="FORM endpoint" size="small" /> allows
                        you to create a video from a form input with pictures.
                        To use this endpoint, you must provide a video title,
                        text, and at least one image that you have uploaded
                        through the
                        <Chip label="/v1/api/assets/media" size="small" />{' '}
                        endpoint. You can also optionally provide parameters
                        such as a template, voice, actor, or music track. The
                        request should be sent as a JSON payload in the body of
                        a POST request to the{' '}
                        <Chip label="/v1/api/videos/create/form" size="small" />{' '}
                        endpoint, with the necessary authorization and
                        content-type headers included.
                    </p>
                    <p>
                        {`If you're unsure about the available options for the optional
              parameters, you can refer to the Catalogue section of the API
              documentation to retrieve information about actors, voices,
              templates, and music tracks.`}
                    </p>
                    <Table
                        aria-label="simple table"
                        sx={{
                            minWidth: {
                                xs: 250,
                                md: 650,
                            },
                            mb: 5,
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Parameter</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Required</TableCell>
                            </TableRow>
                        </TableHead>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {row.map((col, ind) => (
                                    <TableCell key={ind}>{col}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </Table>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {'POST https://api.oxolo.com/v1/api/videos/create/form'}
                    </code>
                </Grid>
                <Grid item xs={12} md={5}>
                    <CodeBox curl={curl} node={node} python={python} />
                    <ResultBox>
                        {'{"results": {"identifier": "{VIDEO_IDENTIFIER}"}}'}
                    </ResultBox>
                </Grid>
            </Grid>
        </main>
    );
}

const curl = `curl -X 'POST' 
'https://api.oxolo.com/v1/api/videos/create/form' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY' 
-H 'content-type: application/json' 
-d '{
"template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
"title": "string",
"text": "string",
"media": [
  "{MEDIA_IDENTIFIER}"
]
}'"
}'`;

const python = `import requests

url= "https://api.oxolo.com/v1/api/videos/create/form"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY",
    "content-type": "application/json"
}
json = {
    "template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
    "title": "string",
    "text": "string",
    "media": [
        "{MEDIA_IDENTIFIER}"
    ]
}
requests.post(url, headers=headers, json=json).json()`;

const node = `const fetch = require('node-fetch');

const url= "https://api.oxolo.com/v1/api/videos/create/form";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY",
  "content-type": "application/json"
};
const json = {
  "template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
  "title": "string",
  "text": "string",
  "media": [
      "{MEDIA_IDENTIFIER}"
  ]
};

fetch(url, 
  { method: 'POST',headers,body:JSON.stringify(json) })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
