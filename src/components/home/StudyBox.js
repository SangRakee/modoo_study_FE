import React from 'react';
import "../../assets/css/studyBox.css";
import StudyTags from './StudyTags';
import StudyPerson from './StudyPerson';
import StudyPeriod from './StudyPeriod';



function StudyBox({title, tags, person, period}){
    return(
        <div className="studyBox">
            <div className="studyContents">
                <table className="studyBox-table">
                    <tr>
                        <td className="studyBox-td-title">
                            {title}
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-tag">
                            <ul>
                                <StudyTags multiTags={tags}/>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-person">
                            <StudyPerson persons={person}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="studyBox-td-period">
                            <StudyPeriod period={period}/>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}
export default StudyBox;


// class StudyBox extends Component { 
//     constructor(props){
//         super(props);
//         this.state = {studies};
//     }       
//     render(){
//         const keywords = [this.state.tags];
//         const keyword = []
//         for (const [index, value] of keywords.entries()){
//             keyword.push(<text className="tag" key={index}>{value}</text>)
//         }
//         return(
//             <div>
//                 {studies.map(studyInfo => (
//                     <StudyContents
//                         title={studyInfo.title}
//                         tags={studyInfo.tags}
//                         person={studyInfo.person}
//                         period={studyInfo.period}/>
//                 ))}
//             </div>
//         );
//     }
 
// }

// export default StudyBox;
