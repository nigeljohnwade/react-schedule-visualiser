import React, {
    memo,
    lazy,
    Suspense,
    useState,
    useEffect,
} from 'react';

const ScheduleItem = ({
    detail,
    detail: {
        vessel: {
            name
        }
    },
    levelOfDetail,
    pta,
    ptd,
    state,
    ...rest,
}) => {
    const trackHeight = 120;
    const now = new Date().getTime();
    const startTime = new Date(pta).getTime() - now;
    const endTime = new Date(ptd).getTime() - now;
    const duration = (endTime - startTime) / levelOfDetail;
    const width = `${Math.max(duration, 20)}px`;
    const height = `${trackHeight}px`;
    const right = `${-(startTime / levelOfDetail)}px`;

    return (
        <div
            className={`schedule__item schedule__item--${state.toLowerCase()} schedule__item--${detail.berth.name.replace(/\s/, '-')}`}
            data-startTime={startTime}
            data-endTime={endTime}
            data-duration={duration}
            style={{ width: width, height: height, right: right }}
            title={`${name} ${detail.berth.name}`}
        >
            <div>{name}</div>
        </div>
    )
}

export default memo(ScheduleItem);