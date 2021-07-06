import React from 'react';
import { Component } from 'react';
import StudyList from '../components/home/StudyList';



function Home() {
    return (
        <div>
            <h2>스터디 목록</h2>
            <main>
                <StudyList/>
            </main>
        </div>
    );
}
export default Home;