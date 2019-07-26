import React, {
    memo,
} from 'react';

const ScheduleItem = ({
    detail,
    endTime,
    levelOfDetail,
    now,
    startTime,
    state,
    title,
    ...rest,
}) => {
    const duration = (endTime - startTime) / levelOfDetail;
    const width = `${Math.max(duration, 20)}px`;
    const right = `${-((startTime - now) / levelOfDetail)}px`;

    return (
        <div
            className={`schedule__item schedule__item--${state.toLowerCase()}`}
            data-duration={duration}
            data-endtime={endTime}
            data-starttime={startTime}
            style={{ width: width, right: right }}
            title={`${title}`}
        >
            <div>{title}</div>
        </div>
    )
}

export default memo(ScheduleItem);