import React, {
    memo,
    lazy,
    Suspense,
    useState,
    useEffect,
} from 'react';

const ScheduleItem = lazy(() => import('components/ScheduleItem'));

const ScheduleTrack = ({
    items,
    levelOfDetail,
    name,
    state,
    ...rest,
}) => {


    return (
        <div
            className={`schedule__track schedule__track--${state.toLowerCase()}`}
            title={`${name}`}
        >
            <div>{name}</div>
            {
                items.map(item => {
                    return (<ScheduleItem
                        detail={{ vessel: item.vessel, berth: item.berth, agent: item.agent }}
                        key={item.id}
                        levelOfDetail={levelOfDetail}
                        {...item}
                    />)
                })
            }
        </div>
    )
}

export default memo(ScheduleTrack);