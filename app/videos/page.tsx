import './page.css';

import Header from '../shared/header/header';

export default function Videos() {
    return (
        <main className="main">
            <Header>Videos</Header>
            <p>
                The Videos endpoints allow you to manage the videos in your
                Oxolo account. You can use these endpoints to retrieve
                information about all the videos in your account, delete a
                specific video, check the status of a video, and retrieve all
                information about a specific video, including a download link.
            </p>
            <p>
                When you create a video using the Oxolo API, it costs 5 credits.
                You can check your credit balance using the Credits endpoint in
                the Account section of the API. If you run out of credits, you
                will need to upgrade your plan or top up your credits in order
                to continue creating videos.
            </p>
        </main>
    );
}
