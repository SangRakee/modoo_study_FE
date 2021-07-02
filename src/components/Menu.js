import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">스터디 목록</Link></li>
                {/*<li><Link to="/home">스터디 목록</Link></li>*/}
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/studymanagement">내 스터디 관리</Link></li>
            </ul>
            <hr/>
            <ul>
                <li><Link to="/">로그인/회원가입</Link></li>
                <li><Link to="/">알림</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;


