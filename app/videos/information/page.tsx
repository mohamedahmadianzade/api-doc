'use client';
import './page.css';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

import CodeBox from '@/app/shared/codeBox/codeBox';
import ResultBox from '@/app/shared/resultBox/resultBox';

import Header from '../../shared/header/header';
import SmallHeader from '../../shared/smallHeader/smallHeader';

export default function VideoInformatio() {
    return (
        <main className="main">
            <Header> Get video information</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        Use this endpoint to retrieve all information about a
                        specific video, including a download link.
                    </p>
                    <p>
                        The <Chip label="results" size="small" /> key contains
                        information about the video, including its status (
                        <Chip label="status" size="small" />
                        ), the date and time it was created (
                        <Chip label="createDateTime" size="small" />
                        ), the date and time it was last updated (
                        <Chip label="lastChangedDateTime" size="small" />
                        ), and other properties specific to the video.
                    </p>
                    <p>
                        The status property indicates the current status of the
                        video, which can be :
                    </p>
                    <div style={{ paddingBottom: 20, paddingLeft: 15 }}>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">
                                <Chip label="done" size="small" /> (indicating
                                that the video is complete)
                            </span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">
                                <Chip label="failed" size="small" />
                                (indicating that an error occurred during video
                                creation)
                            </span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">
                                <Chip label="in_progress" size="small" />{' '}
                                (indicating that the video is still being
                                created)
                            </span>
                        </div>
                    </div>

                    <p>Other properties returned by the endpoint include:</p>
                    <div style={{ paddingBottom: 20, paddingLeft: 15 }}>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">
                                <Chip label="generated_from" size="small" />{' '}
                                (which indicates the method used to create the
                                video (FORM, URL, or PRODUCT)
                            </span>
                        </div>
                        <div className="row">
                            <AppRegistrationIcon />
                            <span className="rowSpan">
                                <Chip label="identifier" size="small" />
                                (which is a unique identifier for the video.)
                            </span>
                        </div>
                    </div>
                    <p>
                        Additionally, the JSON object contains links to the
                        un-watermarked version of the video (
                        <Chip label="un_wateremark_link" size="small" />) and a
                        thumbnail image for the video (
                        <Chip label="thumbnail" size="small" />
                        ). The <Chip label="website" size="small" /> property is
                        only shown if the video was generated through the{' '}
                        <Chip label="URL" size="small" /> mode.
                    </p>
                    <SmallHeader>HTTP Request</SmallHeader>
                    <code>
                        {
                            'GET https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}'
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
    "status": "done",
    "createDateTime": "2023-03-08T10:57:28.778Z",
    "lastChangedDateTime": "2023-03-08T11:21:12.471Z",
    ...
    "generated_from": "FORM",
    "progress": "100",
    "identifier": "{VIDEO_IDENTIFIER}",
    "un_wateremark_link": "https://...",
    "thumbnail": "https://...",
    "website": null,
  }
}`;

const curl = `curl -X 'GET' 
'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY'`;

const python = `import requests

url= 'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}'

headers = {
    'accept': 'application/json',
    'authorization': 'YOUR_API_KEY'
}
requests.get(url, headers=headers).json()`;

const node = `const fetch = require('node-fetch');

const url=
 'https://api.oxolo.com/v1/api/videos/{VIDEO_IDENTIFIER}';

 const headers = {
  'accept': 'application/json',
  'authorization': 'YOUR_API_KEY'
};

fetch(url, { headers })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
