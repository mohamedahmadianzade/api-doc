import './page.css';

import { Chip } from '@mui/material';

import Header from '../shared/header/header';

export default function ReturnTypes() {
    return (
        <main className="main">
            <Header>Return Types</Header>
            <p>
                All successful responses from the Oxolo API include a JSON
                object with a top-level results key. The value of this key will
                vary depending on the specific endpoint, but it will always
                contain the relevant data for the request.
            </p>
            <p>
                For example, if you make a request to the{' '}
                <Chip label="/v1/api/account/credits" size="small" />
                endpoint, the results key will contain your current Oxolo credit
                balance. Similarly, if you make a request to the{' '}
                <Chip label="/v1/api/videos" size="small" />
                endpoint, the results key will contain a list of video IDs.
            </p>
            <p>
                If the request fails, the response will include a non-200 status
                code and an error message in the JSON response body. Please
                refer to the specific endpoint documentation for information on
                error handling and expected error responses.
            </p>
        </main>
    );
}
