import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleVisualiser from '../components/ScheduleVisualiser';

it('Renders without throwing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScheduleVisualiser />, div);
    ReactDOM.unmountComponentAtNode(div);
});
