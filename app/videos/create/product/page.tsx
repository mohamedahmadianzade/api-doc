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
    [
        'short_description',
        'string',
        'A short description of the product.',
        'Yes',
    ],
    ['long_description', 'string', 'A long description of the product.', 'Yes'],
    ['price', 'number', 'The price of the product.', ''],
    [
        'recommended_retail_price',
        'number',
        'The recommended retail price of the product.',
        '',
    ],
    ['product_category', 'string', 'The category of the product.', ''],
    [
        'reviews',
        'array',
        'An array of reviews for the product. Each review should be a string.',
        '',
    ],
    [
        'media',
        'array',
        'An array of media identifiers for images of the product.',
        'Yes',
    ],
    [
        'shop_url',
        'string',
        "The URL of the product page on the shop's website.",
        '',
    ],
    [
        'data',
        'object',
        'An object containing any additional data to include in the video creation.',
        '',
    ],
    [
        'metadata',
        'object',
        'An object containing any additional metadata to include in the video creation.	',
        '',
    ],
];

export default function CreateVideoByProduct() {
    return (
        <main className="main">
            <Header>Product</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12} md={7}>
                    <p>
                        The <Chip label="PRODUCT endpoint" size="small" />{' '}
                        allows you to create a video from product information,
                        often found in e-commerce shop systems. To use this
                        endpoint, you must provide product information as well
                        as any optional parameters such as a template, voice,
                        actor, or music track. The request should be sent as a
                        JSON payload in the body of a POST request to the{' '}
                        <Chip
                            label="/v1/api/videos/create/product"
                            size="small"
                        />{' '}
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
                        {
                            'POST https://api.oxolo.com/v1/api/videos/create/product'
                        }
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
'https://api.oxolo.com/v1/api/videos/create/product' 
-H 'accept: application/json' 
-H 'authorization: YOUR_API_KEY' 
-H 'content-type: application/json' 
-d '{
"template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
"title": "string",
"short_description": "string",
"long_description": "string",
"price": 0,
"recomended_retail_price": 0,
"product_category": "string",
"reviews": [
  "string"
],
"media": [
  "{MEDIA_IDENTIFIER}"
],
"shop_url": "string",
"data": {},
"metadata": {}
}'`;

const python = `import requests
url= "https://api.oxolo.com/v1/api/videos/create/product"

headers = {
    "accept": "application/json",
    "authorization": "YOUR_API_KEY",
    "content-type": "application/json"
}
json = {
  "template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
  "title": "string",
  "short_description": "string",
  "long_description": "string",
  "price": 0,
  "recomended_retail_price": 0,
  "product_category": "string",
  "reviews": [
    "string"
  ],
  "media": [
    "{MEDIA_IDENTIFIER}"
  ],
  "shop_url": "string",
  "data": {},
  "metadata": {}
}
requests.post(url, headers=headers, json=json).json()`;

const node = `const fetch = require('node-fetch');
const url= 
"https://api.oxolo.com/v1/api/videos/create/product";

const headers = {
  "accept": "application/json",
  "authorization": "YOUR_API_KEY",
  "content-type": "application/json"
};
const json = {
  "template_id": "42b69075-952e-42fe-81d4-dbf8ed35120f",
  "title": "string",
  "short_description": "string",
  "long_description": "string",
  "price": 0,
  "recomended_retail_price": 0,
  "product_category": "string",
  "reviews": [
    "string"
  ],
  "media": [
    "{MEDIA_IDENTIFIER}"
  ],
  "shop_url": "string",
  "data": {},
  "metadata": {}
};

fetch(url, 
  { method: 'POST', headers, body: JSON.stringify(json) })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));`;
