import React, {
    lazy,
    Suspense,
    useState,
} from 'react';

import { items1, items2, items3 } from 'data/listPortCalls';

import 'styles/global.scss';

const ScheduleVisualiser = lazy(() => import('components/ScheduleVisualiser'));
const trackData = [items1, items2, items3];

function App() {
    const [levelOfDetail, setLevelOfDetail] = useState(10000 * 60);

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
            </div>
            <Suspense fallback={<p>Loading</p>}>
                <ScheduleVisualiser
                    caption="Schedule caption goes here"
                    levelOfDetail={levelOfDetail}
                    title="Schedule visualisation"
                    trackData={trackData}
                />
            </Suspense>
        </div>
    );
}

export default App;
