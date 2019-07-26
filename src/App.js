import React, {
    lazy,
    Suspense,
    useState,
} from 'react';

import 'styles/global.scss';

const ScheduleVisualiser = lazy(() => import('components/ScheduleVisualiser'));

function App() {
    const [levelOfDetail, setLevelofDetail] = useState(10000 * 60);

    return (
        <div className="app">
            <input
                type="number"
                name="levelOfDetail"
                value={levelOfDetail}
                onChange={(e) => { setLevelofDetail(e.target.value) }}
                step="1000"
            />
            <Suspense fallback={<p>Loading</p>}>
                <ScheduleVisualiser
                    caption="Schedule caption goes here"
                    levelOfDetail={levelOfDetail}
                    title="Schedule visualisation"
                />
            </Suspense>
        </div>
    );
}

export default App;
