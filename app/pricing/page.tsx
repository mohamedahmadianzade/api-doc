import './page.css';

import { Chip } from '@mui/material';

import Header from '../shared/header/header';
import SmallHeader from '../shared/smallHeader/smallHeader';

export default function Pricing() {
    return (
        <main className="main">
            <Header>Pricing</Header>
            <div className="planBox">
                <SmallHeader>Free Plan</SmallHeader>
                <p>
                    Our Free plan is a great way to get started with Oxolo. With
                    this plan, you can generate videos for your e-commerce
                    products without needing to provide a credit card. However,
                    please note that videos generated with the Free plan will
                    include a watermark.
                </p>
                <p>
                    The Free plan comes with{' '}
                    <Chip label="15 credits" size="small" /> , which can be used
                    to create up to 3 videos (since each video costs{' '}
                    <Chip label="5 credits" size="small" /> ). This is a great
                    way to try out our service and see how it works for you.
                </p>
                <p>
                    {`To sign up for the Free plan, simply visit our pricing page and select
          the Free plan. You'll be able to start generating videos right away.
          If you have any questions about the Free plan, please don't hesitate
          to contact us.`}
                </p>
            </div>

            <div className="planBox">
                <SmallHeader>Personal and Enterprise</SmallHeader>
                <p>
                    {` To get an overview of the available personal and enterprise plans,
          please visit the pricing page. Here you'll find information on what
          features are included in each plan, as well as pricing information and
          options for custom plans.`}
                </p>
                <p>
                    {`If you have any questions about which plan is right for you, or if you
            need a custom plan that isn't listed on the pricing page, please
            contact us. We're happy to help you find the best solution for your
            needs.`}
                </p>
            </div>
        </main>
    );
}
