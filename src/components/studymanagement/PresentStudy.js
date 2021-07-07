import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import RatingModal from "./RatingModal"


var contents=[
    {id:1, title:"스터디1",description:"짱구",finish:false},
    {id:2, title:"스터디2",description:"철수",finish:false},
    {id:3, title:"스터디3",description:"유리",finish:true},
    {id:4, title:"스터디4",description:"맹구",finish:true},
    {id:5, title:"스터디5",description:"훈이",finish:true},
]


function PresentStudy(props) {
    const [isviewinfoModal,setIsviewinfoModal]=useState(false);
    const [isratingModal,setIsratingModal]=useState(false);

    var params=useParams();
    var study_id = params.study_id;
    var selected_study = {
        title:'Sorry',
        description:'Not Found'
    }
    for(var i=0; i<contents.length; i++){
        if(contents[i].id === Number(study_id)){
            selected_study = contents[i];
            break;
        }
    }

    const openViewinfoModal = () => {
        setIsviewinfoModal(true)
    };

    const closeViewinfoModal = () => {
        setIsviewinfoModal(false)
    };
    const openRatingModal = () => {
        setIsratingModal(true)
    };

    const closeRatingModal = () => {
        setIsratingModal(false)
    };



    return (
        <div>
            <h3>{selected_study.title}</h3>
            {selected_study.description}
            <button onClick={()=>window.open('/chatting','_blank')}>팀 전체 채팅</button>

            <button onClick={openRatingModal}>팀원 평가하기</button>
            <RatingModal open={isratingModal} close={closeRatingModal}>
            </RatingModal>


            <button>스터디 종료</button>

        </div>
    );
}

export default PresentStudy;