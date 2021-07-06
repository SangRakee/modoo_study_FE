import React from 'react';

function StudyPerson({persons}){
    const currentPerson = [];
    const maxPerson = [];
    for (const [index, value] of persons.entries()){
        if(index === 0){
            currentPerson.push(<text key={index}>{value}</text>)
        } else {
            maxPerson.push(<text key={index}>{value}</text>)
        }
    }
    return (
        <>{currentPerson} / {maxPerson} 명 </>
    );
}
export default StudyPerson;