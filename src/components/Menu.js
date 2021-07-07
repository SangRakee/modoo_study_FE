import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import "../assets/css/navlink.css"

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSigninModal: false,
            isSignupModal: false,
        };
    }

    openSigninModal = () => {
        this.setState({ isSigninModal: true });
    };

    closeSigninModal = () => {
        this.setState({ isSigninModal: false });
    };
    openSignupModal = () => {
        this.setState({ isSignupModal: true });
    };

    closeSignupModal = () => {
        this.setState({ isSignupModal: false });
    };

    render() {
        return (
            <div>
                <div style={{float: "right"}}>
                    <button onClick={this.openSigninModal}>로그인</button>
                    <SigninModal open={this.state.isSigninModal} close={this.closeSigninModal} header="로그인 창">
                        로그인 모달 창 입니다.
                    </SigninModal>
                    <button onClick={this.openSignupModal}>회원가입</button>
                    <SignupModal open={this.state.isSignupModal} close={this.closeSignupModal} header="회원가입 창">
                        회원가입 모달 창 입니다.
                    </SignupModal>
                    <Link to="/mypage">마이페이지</Link>
                    <button onClick={()=>window.open('/chatting','_blank')}>채팅창</button>


                </div>


                <ul className="menu" >
                    <li><NavLink exact to="/">스터디 목록</NavLink></li>
                    <li><NavLink to="/community">커뮤니티</NavLink></li>
                    <li><NavLink to="/studymanagement">내 스터디 관리</NavLink></li>
                </ul>
                {/*<hr/>*/}
                {/*<ul className="submenu">*/}
                {/*    <li><Link to="/signinmodal">로그인/회원가입</Link></li>*/}
                {/*    <li><Link to="/">알림</Link></li>*/}
                {/*    <li><Link to="/mypage">마이페이지</Link></li>*/}
                {/*</ul>*/}
                {/*<hr/>*/}
            </div>
        );
    }
};

export default Menu;


// class Menu extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             mode:'loggedout',
//             loggedout:{title:'로그인/회원가입'},
//             loggedin:{title:'로그아웃'},
//         }
//     }
//     render(){
//         var _title = null;
//         if(this.state.mode === 'loggedout'){
//             _title = this.state.loggedout.title;
//         } else if(this.state.mode === 'loggedin'){
//             _title = this.state.loggedin.title;
//         }
//         return(
//             <div>
//                 <ul>
//                     <li><a href="/">스터디 목록</a></li>
//                     <li><a href="/community">커뮤니티</a></li>
//                     <li><a href="/studymanagement">내 스터디 관리</a></li>
//                 </ul>
//                 <hr/>
//                 <ul>
//                     <li><a href="/">{this.state.loggedout.title}</a></li>
//                     {/* 여기에서 로그인 상태에 따라 바뀌게 */}
//                     <li><a href="/">알림</a></li>
//                     <li><a href="/mypage">마이페이지</a></li>
//                 </ul>
//                 <hr/>
//             </div>
//         );
//     }
// }
// export default Menu;