import './page.css';

import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Grid } from '@mui/material';
import { Chip } from '@mui/material';

import Header from '../../shared/header/header';

export default function CreateVideo() {
    return (
        <main className="main">
            <Header>Create a video</Header>
            <Grid className="authenticationContent" container>
                <Grid item xs={12}>
                    <p>
                        The Create endpoints allow you to create new videos in
                        your Oxolo account. You can create videos using one of
                        three methods:
                    </p>
                    <div style={{ paddingBottom: 5 }}>
                        <div className="row">
                            <SlowMotionVideoIcon />
                            <span className="rowSpan">URL</span>
                        </div>
                        <div className="row">
                            <SlowMotionVideoIcon />
                            <span className="rowSpan">Form</span>
                        </div>
                        <div className="row">
                            <SlowMotionVideoIcon />
                            <span className="rowSpan">Product</span>
                        </div>
                    </div>
                    <p>
                        If you use the <Chip label="URL method" size="small" />,
                        you can create a video from a URL. The
                        <Chip label="FORM method" size="small" /> allows you to
                        create a video from a form or text input with pictures.
                        If you prefer, you can use the
                        <Chip label="PRODUCT method" size="small" /> to create a
                        video from product information typically found in
                        e-commerce shop systems, including pictures.
                    </p>
                    <p>
                        Please note that creating a video using the Oxolo API
                        costs
                        <Chip label="5 credits" size="small" />
                        per video. You can check your credit balance using the{' '}
                        <Chip label="Credits" size="small" />
                        endpoint in the{' '}
                        <Chip label="Account section" size="small" /> of the
                        API. If you run out of credits, you will need to upgrade
                        your plan or top up your credits in order to continue
                        creating videos.
                    </p>
                </Grid>
            </Grid>
        </main>
    );
}
