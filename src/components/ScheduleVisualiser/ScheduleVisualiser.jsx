import React, {
    memo,
    lazy,
    Suspense,
    useState,
    useEffect,
} from 'react';

import { items1, items2, items3 } from 'data/listPortCalls';

const ScheduleTrack = lazy(() => import('components/ScheduleTrack'));

const ScheduleVisualiser = ({
    caption,
    levelOfDetail,
    title,
    ...rest,
}) => {
    const trackData = [items1, items2, items3];
    return (
        <figure>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="schedule__body">
                <Suspense fallback={<p>Loading</p>}>
                    {
                        trackData.map(track => {
                            return <ScheduleTrack
                                items={track}
                                levelOfDetail={levelOfDetail}
                                state="normal"
                            />
                        })
                    }
                </Suspense>
            </div>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default memo(ScheduleVisualiser);