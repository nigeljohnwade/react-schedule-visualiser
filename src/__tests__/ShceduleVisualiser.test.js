import React from 'react';
import ReactDOM from 'react-dom';

import ScheduleVisualiser from '../components/ScheduleVisualiser';
import { items1, items2, items3 } from "../data/listPortCalls";

const trackData = [items1, items2, items3];

it('Renders without throwing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleVisualiser
        caption="Schedule caption goes here"
        levelOfDetail={30000}
        title="Schedule visualisation"
        trackData={trackData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
