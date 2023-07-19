import './page.css';

import Header from '../shared/header/header';

export default function TargetGroup() {
    return (
        <main className="main">
            <Header>Target Group</Header>
            <p>
                Our API is designed to meet the needs of a variety of users,
                including online shop owners, e-commerce sellers, video
                creators, and content creators.
            </p>
            <p>
                If you run an online shop or sell products through an e-commerce
                platform, you can use our API to generate high-quality videos
                that showcase your products and drive engagement with your
                audience.
            </p>
            <p>
                Video creators and content creators can also benefit from our
                API, as it provides an efficient way to generate videos without
                needing to spend hours on editing and post-production.
            </p>
            <p>
                {`No matter what your background or experience level, our API is designed
          to be user-friendly and accessible to all. If you're interested in
          learning more about how our API can help you, please don't hesitate to
          contact us.`}
            </p>
        </main>
    );
}
