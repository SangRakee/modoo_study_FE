import React from 'react';
import StudyBox from "./StudyBox";
import "../../assets/css/studyBox.css";


function BoxArray({studies}) { 
    return(
        <div>
            {studies.map(studyInfo => (
                <StudyBox
                    title={studyInfo.title}
                    tags={studyInfo.tags}
                    person={studyInfo.person}
                    period={studyInfo.period}/>
            ))}
        </div>
    );

}
export default BoxArray;

