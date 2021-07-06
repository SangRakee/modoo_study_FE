import React from 'react';

function StudyPeriod({period}){
    const startDate = [];
    const endDate = [];
    for (const [index, value] of period.entries()){
        if(index === 0){
            startDate.push(<text key={index}>{value}</text>)
        } else {
            endDate.push(<text key={index}>{value}</text>)
        };
    }
    return (
        <>{startDate} ~ {endDate}</>
    );
}
export default StudyPeriod;