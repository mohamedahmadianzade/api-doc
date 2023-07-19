'use client';
import './page.css';

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Header from '../shared/header/header';

const rows = [
    ['200', 'The request was successful.'],
    ['201', 'The request was successful and a new resource was created.'],
    [
        '400',
        'Bad Request -- The request could not be understood or was missing required parameters.',
    ],
    [
        '401',
        'Unauthorized -- Authentication failed or user does not have permissions for the requested operation.',
    ],
    ['404', 'Not Found -- The requested resource was not found.'],
    ['429', 'Too Many Requests -- Too many requests hit the API too quickly.'],
    [
        '500',
        'Internal Server Error -- We had a problem with our server. Try again later.',
    ],
    [
        '503',
        "Service Unavailable -- We're temporarily offline for maintenance. Please try again later.",
    ],
];

export default function Responses() {
    return (
        <main className="main">
            <Header>Responses</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
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
                                <TableCell>Code</TableCell>
                                <TableCell>Meaning</TableCell>
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
                </Grid>
            </Grid>
        </main>
    );
}
