import React, {
    lazy,
    Suspense,
    useState,
} from 'react';

import { items1, items2, items3 } from 'data/listPortCalls';

import 'styles/global.scss';

const ScheduleVisualiser = lazy(() => import('components/ScheduleVisualiser'));
const trackData = [
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
                    onChange={(e) => { setLevelOfDetail(e.target.value) }}
                    step="1000"
                />
                <input
                    type="number"
                    name="now"
                    value={now}
                    onChange={(e) => { setNow(e.target.value) }}
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
