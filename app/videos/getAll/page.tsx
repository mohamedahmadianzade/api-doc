'use client';
import './page.css';

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

const rows = [
    [
        'sortField',
        'string',
        'The field to sort the videos by. Values are created and updated.',
    ],
    ['sortType', 'string', 'If to sort asc or desc.'],
];

export default function GetAll() {
    return (
        <main className="main">
            <Header>Get all Videos</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to retrieve information about all
                        videos in your account. The identifier is used in all
                        endpoints to uniquely identify a video. The videos are
                        sorted based creation time by default.
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
                    <code>GET https://api.oxolo.com/v1/api/videos</code>
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
  results: [
    {
      identifier: "{VIDEO_IDENTIFIER}",
      created: "{VIDEO_CREATION_TIME}",
      updated: "{VIDEO_UPDATE_TIME}",
    },
  ],
}`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/videos?sortField=created&sortType=desc' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 'https://api.oxolo.com/v1/api/videos?sortField=created&sortType=desc'
headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');
const url= 
'https://api.oxolo.com/v1/api/videos?sortField=created&sortType=desc'

const headers = {
  'accept': 'application/json',
  'authorization': 'YOUR_API_KEY'
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
