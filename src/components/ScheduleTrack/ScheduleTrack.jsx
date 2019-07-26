import React, {
    memo,
    lazy,
} from 'react';

const ScheduleItem = lazy(() => import('components/ScheduleItem'));

const ScheduleTrack = ({
    items,
    levelOfDetail,
    name,
    now,
    state,
    ...rest,
}) => {

    return (
        <div
            className={`schedule__track schedule__track--${state.toLowerCase()}`}
            title={`${name}`}
        >
            <div className="schedule__track-label">{name}</div>
            {
                items.map(item => {
                    return (<ScheduleItem
                        key={item.id}
                        levelOfDetail={levelOfDetail}
                        now={now}
                        {...item}
                    />)
                })
            }
        </div>
    )
}

export default memo(ScheduleTrack);