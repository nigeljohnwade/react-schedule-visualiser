import React, {
    lazy,
    Suspense,
} from 'react';

import { items } from 'data/listPortCalls';

import 'styles/global.scss';

const ScheduleVisualiser = lazy(() => import('components/ScheduleVisualiser'));

function App() {
    return (
        <div className="app">
            <Suspense fallback={<p>Loading</p>}>
                <ScheduleVisualiser
                    caption="Information about this schedule"
                    items={items}
                    levelOfDetail={10000 * 60}
                    title="Schedule visualisation"
                />
            </Suspense>
        </div>
    );
}

export default App;
