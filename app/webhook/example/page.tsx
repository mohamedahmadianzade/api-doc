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

const rows = [
    [
        'eventType',
        'string',
        'The events which should notify the system.',
        'Yes',
    ],
    [
        'apiKey',
        'string',
        '	The API key which is accessible via user setting menu.	',
        'Yes',
    ],
    [
        'systemId',
        'string',
        '	The system id which provided by Oxolo support.',
        'Yes',
    ],
];
const rows2 = [
    ['videoUpdateStatus', 'string', 'When a video has been updated.'],
    ['videoProgress', 'string', 'Incremental progress updates for each video.'],
    ['userCredit', 'string', 'If the credits of the account change.'],
    ['all', 'string', 'All of the above.'],
];

export default function Example() {
    return (
        <main className="main">
            <Header>Example</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>All the parameters for registering users:</p>
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
                    <p>
                        When registering the eventType, you are able to register
                        the following parameters:
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
                                <TableCell>Value</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        {rows2.map((row, index) => (
                            <TableRow key={index}>
                                {row.map((col, ind) => (
                                    <TableCell key={ind}>{col}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </Table>
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
      "eventType": "videoUpdateStatus",
      "apiKey": "dbf8ed35120f",
      "createdAt": "2023/06/21 12:00:00",
      "system": {
          "id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
          "name": "system name",
          "webhookUrl": "webhookUrl"
      }
  }
}`;

const curl = `curl -X 'POST' 
'https://api.oxolo.com/v1/api/webhooks' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'
-d 
'{
  "eventType": "videoUpdateStatus",
  "apiKey": "dbf8ed35120f"
  "systemId": "42b69075-952e-42fe-81d4-dbf8ed35120f"
 }'`;

const python = `import requests

url= "https://api.oxolo.com/v1/api/webhooks"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY"
}

json = {
    "eventType": "videoUpdateStatus",
    "apiKey": "dbf8ed35120f"
    "systemId": "42b69075-952e-42fe-81d4-dbf8ed35120f"
}
requests.post(url, headers=headers , json=json).json()`;

const node = `const fetch = require('node-fetch');

const url= "https://api.oxolo.com/v1/api/webhooks";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY"
};

const body = {
    "eventType": "videoUpdateStatus",
    "apiKey": "dbf8ed35120f"
    "systemId": "42b69075-952e-42fe-81d4-dbf8ed35120f"
}

fetch(url, { method: 'POST', headers, body })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
