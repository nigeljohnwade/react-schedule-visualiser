import React, {
    memo,
    lazy,
    Suspense,
} from 'react';

const ScheduleTrack = lazy(() => import('components/ScheduleTrack'));

const ScheduleVisualiser = ({
    caption,
    levelOfDetail,
    now,
    title,
    trackData,
    ...rest,
}) => {

    return (
        <figure>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="schedule__body">
                <Suspense fallback={<p>Loading</p>}>
                    {
                        trackData.map((track, index) => {
                            return <ScheduleTrack
                                items={track}
                                key={index}
                                levelOfDetail={levelOfDetail}
                                now={now}
                                name={index === 0 ? 'Markers' : `Berth-${index}`}
                                state={index === 0 ? 'markers' : 'normal'}
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