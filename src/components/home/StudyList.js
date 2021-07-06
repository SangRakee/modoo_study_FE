import React, { Component } from "react";
import BoxArray from "./BoxArray";
import "../../assets/css/studyList.css";


const studies = [
    {
        category: "interview",
        title: "면접스터디",
        tags: ["NCS", "IT", "영어"],
        person: ["10", "20"],
        period: ["2021-08-01", "2021-08-30"]
    },
    {
        category: "coding",
        title: "코딩스터디",
        tags: ["컴퓨터", "IT", "개발",],
        person: ["7", "10"],
        period: ["2021-07-01", "2021-07-30"],
    },
    {
        category: "english",
        title: "영어스터디",
        tags: ["회화", "언어", "토익"],
        person: ["5", "8"],
        period: ["2021-06-01", "2021-06-30"]
    },
    {
        category: "certificate",
        title: "자격증스터디",
        tags: ["IT", "기사", "자격증"],
        person: ["8", "10"],
        period: ["2021-05-01", "2021-05-30"]
    },
    {
        category: "english",
        title: "영어스터디",
        tags: ["회화", "언어", "토익"],
        person: ["5", "8"],
        period: ["2021-06-01", "2021-06-30"]
    },
    {
        category: "certificate",
        title: "자격증스터디",
        tags: ["IT", "기사", "자격증"],
        person: ["8", "10"],
        period: ["2021-05-01", "2021-05-30"]
    },
    {
        category: "interview",
        title: "면접스터디",
        tags: ["NCS", "IT", "영어"],
        person: ["10", "20"],
        period: ["2021-08-01", "2021-08-30"]
    },
    {
        category: "coding",
        title: "코딩스터디",
        tags: ["컴퓨터", "IT", "개발",],
        person: ["7", "10"],
        period: ["2021-07-01", "2021-07-30"],
    },    {
        category: "interview",
        title: "면접스터디",
        tags: ["NCS", "IT", "영어"],
        person: ["10", "20"],
        period: ["2021-08-01", "2021-08-30"]
    },
    {
        category: "coding",
        title: "코딩스터디",
        tags: ["컴퓨터", "IT", "개발",],
        person: ["7", "10"],
        period: ["2021-07-01", "2021-07-30"],
    },
    {
        category: "coding",
        title: "코딩스터디",
        tags: ["컴퓨터", "IT", "개발",],
        person: ["7", "10"],
        period: ["2021-07-01", "2021-07-30"],
    }
]
const myInterests = ["interview", "coding", "certificate"]
// 추후 검색 결과, 관심사에 따라 데이터 불러와서 변수 생성



function Section({category, studies}) {
    const category_name = category;
    const study = studies.filter(item => item.category === category_name); // filter studies by myInterests
    console.log(study)
    console.log(category);
    return(
        <section className="category">
            <h4 className="category-title">{category_name}</h4>
            <div className="category-box-area">
                <BoxArray studies={study}/>
            </div>
        </section>
    );
}

class StudyList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {studyInfo: studies};
    // }

    render() {
        return(
            <div className="studyList">
                {myInterests.map(interest => (
                    <Section category={interest} studies={studies}/>
                ))}
            </div>
        );
    };
}
export default StudyList;


