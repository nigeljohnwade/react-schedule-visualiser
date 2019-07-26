import React, {
    memo,
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

    const now = new Date().getTime();
    const startTime = new Date(pta).getTime() - now;
    const endTime = new Date(ptd).getTime() - now;
    const duration = (endTime - startTime) / levelOfDetail;
    const width = `${Math.max(duration, 20)}px`;
    const right = `${-(startTime / levelOfDetail)}px`;

    return (
        <div
            className={`schedule__item schedule__item--${state.toLowerCase()} schedule__item--${detail.berth.name.replace(/\s/, '-')}`}
            data-duration={duration}
            data-endtime={endTime}
            data-starttime={startTime}
            style={{ width: width, right: right }}
            title={`${name}`}
        >
            <div>{name}</div>
        </div>
    )
}

export default memo(ScheduleItem);