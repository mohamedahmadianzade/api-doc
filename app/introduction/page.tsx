'use client';

import './page.css';

import Image from 'next/image';

import Header from '../shared/header/header';
export default function Introducton() {
    return (
        <>
            <main className="main">
                <Header>Introduction</Header>
                <p>
                    Welcome to the Oxolo API documentation! Our API allows you
                    to create high-quality videos for e-commerce products, which
                    can increase sales, engagement, and traffic. With our API,
                    you can easily integrate video creation into your e-commerce
                    platform or application.
                </p>
                <p>
                    Our API offers a variety of routes that allow you to
                    retrieve video information, check the status of videos, and
                    create new videos using different input methods, such as
                    URLs, forms, and product information. You can also retrieve
                    information about our actors, voices, templates, and music
                    assets for video creation.
                </p>
                <p>
                    Each video costs 5 credits to create, and on average takes
                    10 minutes to generate. You can edit your videos using our
                    web-based video editor at studio.oxolo.com.
                </p>
                <p>
                    {`We hope that our API documentation will help you integrate video
            creation into your e-commerce platform or application with ease. If
            you have any questions or feedback, please don't hesitate to contact
            us.`}
                </p>
                <div className="imageParent">
                    <Image
                        alt="api key"
                        height={300}
                        src="https://img.youtube.com/vi/tv6AUf6ZRKI/0.jpg"
                        style={{
                            width: '350px',
                            height: 'auto',
                            borderRadius: 10,
                        }}
                        width={300}
                    />
                </div>
            </main>
        </>
    );
}
