import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

type Props = {
    name: string;
};

export const EmailTemplate = ({ name }: Props) => (
    <Html>
        <Head />
        <Preview>
            {`We're excited to have you at Spring & Grinding Days 2024. Here are some details about the event`}
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Section>
                    <Img
                        src="https://sagd.wafios.online/static/logo.png"
                        width="170"
                        alt="WAFIOS"
                        style={logo}
                    />
                    <Text style={paragraph}>Hi {name || 'No Name'},</Text>
                    <Text style={paragraph}>
                        {`We're excited to have you at EV Tech Day 2024. Here are some details about the event`}
                    </Text>
                    <Hr />
                    <Text style={paragraph}>Date — May 7th</Text>
                    <Text style={paragraph}>
                        Location — Wafios Midwest Technical Center
                    </Text>
                    <Hr />
                    <Heading style={heading}>Getting There</Heading>
                    <Text style={paragraph}>
                        {`The event is located at 9830 190th St, Unit D Mokena, IL
                        60448. You can get there by car, bus, or train. The
                        nearest train station is Mokena Station, which is a
                        short 10-minute drive from the event location. If you're
                        driving, there is ample parking available at the venue.`}
                    </Text>
                    <Hr />
                    <Heading style={heading}>Hotel Information</Heading>
                    <Text style={paragraph}>
                        We have partnered with Even Hotel Chicago-Tinley
                        Park-Conv Ctr, an IHG Hotel
                    </Text>
                    <Text style={paragraph}>
                        Located at 18501 Convention Center Dr, Tinley Park, IL
                        60477 to provide discounted rates for attendees. You can
                        book a room by:
                    </Text>
                    <Text style={paragraph}>Phone Number: (708)-444-1100</Text>
                    <Text style={paragraph}>
                        Use this link:{' '}
                        <Link href="https://www.evenhotels.com/redirect?path=hd&brandCode=VN&localeCode=en&regionCode=1&hotelCode=CHITN&_PMID=99801505&GPC=WAF&cn=no&viewfullsite=true">
                            Wafios - EV Technology Day
                        </Link>
                    </Text>
                    <Text style={paragraph}>
                        Discount Code: <code style={code}>WAF</code>
                    </Text>
                    <Hr />
                    <Heading style={heading}>Contact Information</Heading>
                    <Text style={paragraph}>
                        If you have any questions, please feel free to reach
                        out:
                    </Text>
                    <Text style={paragraph}>
                        <strong>Name:</strong> Brian Davi
                    </Text>
                    <Text style={paragraph}>
                        <strong>Email:</strong>{' '}
                        <Link href="mailto:BrianD@wafios.us">
                            BrianD@wafios.us
                        </Link>
                    </Text>
                    <Text style={paragraph}>
                        <strong>Phone:</strong> 203-871-2072
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplate;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
    margin: '0 auto',
    marginBottom: '58px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const heading = {
    fontSize: '28px',
    letterSpacing: '-0.5px',
    lineHeight: '1.3',
    fontWeight: '600',
    padding: '17px 0 0',
};

const code = {
    fontFamily: 'monospace',
    fontWeight: '700',
    padding: '2px 8px',
    backgroundColor: '#dfe1e4',
    letterSpacing: '-0.3px',
    fontSize: '16px',
    borderRadius: '4px',
    color: '#3c4149',
};
