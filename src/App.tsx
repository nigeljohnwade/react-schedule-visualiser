import React, {
    lazy,
    Suspense,
    useState,
} from 'react';

import { items1, items2, items3 } from 'data/listPortCalls';

import 'styles/global.scss';

const ScheduleVisualiser = lazy(() => import('components/ScheduleVisualiser'));
const timeDisplayTrack = [
    {
        id: new Date().getTime() - (1000 * 60 * 60 * 24),
        startTime: new Date().getTime() - (1000 * 60 * 60 * 24),
        endTime: new Date().getTime(),
        title: 'Day',
        state: 'day',
    },
    {
        id: new Date().getTime() - (1000 * 60 * 60 * 24 * 2),
        startTime: new Date().getTime() - (1000 * 60 * 60 * 24 * 2),
        endTime: new Date().getTime() - (1000 * 60 * 60 * 24),
        title: 'Day',
        state: 'day',
    },
    {
        id: new Date().getTime() - (1000 * 60 * 60 * 24 * 3),
        startTime: new Date().getTime() - (1000 * 60 * 60 * 24 * 3),
        endTime: new Date().getTime() - (1000 * 60 * 60 * 24 * 2),
        title: 'Day',
        state: 'day',
    },
    {
        id: new Date().getTime() - (1000 * 60 * 60 * 24 * 4),
        startTime: new Date().getTime() - (1000 * 60 * 60 * 24 * 4),
        endTime: new Date().getTime() - (1000 * 60 * 60 * 24 * 3),
        title: 'Day',
        state: 'day',
    }
];
const trackData = [
    timeDisplayTrack,
    items1.map(item => {
        return {
            id: item.id,
            startTime: new Date(item.pta).getTime(),
            endTime: new Date(item.ptd).getTime(),
            title: item.vessel.name,
            state: item.state,
        }
    }),
    items2.map(item => {
        return {
            id: item.id,
            startTime: new Date(item.pta).getTime(),
            endTime: new Date(item.ptd).getTime(),
            title: item.vessel.name,
            state: item.state,
        }
    }),
    items3.map(item => {
        return {
            id: item.id,
            startTime: new Date(item.pta).getTime(),
            endTime: new Date(item.ptd).getTime(),
            title: item.vessel.name,
            state: item.state,
        }
    }),
];

function App() {
    const [levelOfDetail, setLevelOfDetail] = useState(10000 * 60);
    const [now, setNow] = useState(new Date().getTime());

    return (
        <div className="app">
            <div className="schedule__control-panel">
                <input
                    type="number"
                    name="levelOfDetail"
                    value={levelOfDetail}
                    onChange={(e) => { setLevelOfDetail(Number(e.target.value)) }}
                    step="1000"
                />
                <input
                    type="number"
                    name="now"
                    value={now}
                    onChange={(e) => { setNow(Number(e.target.value)) }}
                    step="1000000"
                />
            </div>
            <Suspense fallback={<p>Loading</p>}>
                <ScheduleVisualiser
                    caption="Schedule caption goes here"
                    levelOfDetail={levelOfDetail}
                    now={now}
                    title="Schedule visualisation"
                    trackData={trackData}
                />
            </Suspense>
        </div>
    );
}

export default App;
