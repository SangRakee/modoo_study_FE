import React from 'react';

function StudyTags({multiTags}){
    console.log(multiTags);
    const singleTag = [];
    for (const [index, value] of multiTags.entries()){
       singleTag.push(<li className="tag" key={index}>{value}</li>)
   }
    return(
        <>{singleTag}</>
    );
}
export default StudyTags;