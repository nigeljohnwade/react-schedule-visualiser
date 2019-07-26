import React, {
    memo,
    lazy,
    Suspense,
    useState,
    useEffect,
} from 'react';
import { items } from 'data/listPortCalls';

const ScheduleItem = lazy(() => import('components/ScheduleItem'));

const ScheduleVisualiser = ({
    caption,
    levelOfDetail,
    title,
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
                        items.map(item => {
                            console.log(item.berth.name);
                            return (<ScheduleItem
                                detail={{ vessel: item.vessel, berth: item.berth, agent: item.agent }}
                                key={item.id}
                                levelOfDetail={levelOfDetail}
                                {...item}
                            />)
                        })
                    }
                </Suspense>
            </div>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default memo(ScheduleVisualiser);