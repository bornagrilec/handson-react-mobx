import React from 'react';

import { PageTitle, EventsCount } from '../lib/styles/GeneralStyles';
import {
    Form,
    Input,
    Button
} from '../lib/styles/FormStyles';

// Components
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';

// Images
import IconEvent from '../assets/img/event-icon.png';

const AddEvent = () => {
    return (
        <>
            <PageTitle>Add event</PageTitle>
            <EventsCount>Current number of events:</EventsCount>
            <Form>
                <Input type="text" placeholder="Type the event name..." />
                <Button type="submit">Submit event</Button>
            </Form>
            <SectionGrid>
                <InfoBox
                    icon={IconEvent}
                    title="Title of the event"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                    btnText="Register for the event"
                />
            </SectionGrid>
        </>
    );
}

export default AddEvent;