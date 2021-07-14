import React, {Component, useEffect, useState} from 'react';
import { Link,NavLink } from 'react-router-dom';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import "../assets/css/navlink.css"

function Menu(props) {
    const [isSigninModal,setIsSigninModal]=useState(false);
    const [isSignupModal,setIsSignupModal]=useState(false);
    const [user, setUser] = useState([]);
    let [isAuthenticated, setisAuthenticated] = useState(!!localStorage.getItem('token'));

    const openSigninModal = () => {
        setIsSigninModal(true)
    };

    const closeSigninModal = () => {
        setIsSigninModal(false)
    };
    const openSignupModal = () => {
        setIsSignupModal(true)
    };

    const closeSignupModal = () => {
        setIsSignupModal(false)
    };

    const userHasAuthenticated = (authenticated, username, token) => {
        setisAuthenticated(authenticated);
        setUser(username);
        localStorage.setItem('token', token);
    };// 회원가입이나 로그인이 성공했을 때 토큰을 저장

    return (
        <div>
            <div style={{float: "right"}}>
                <button onClick={openSigninModal}>로그인</button>
                <SigninModal open={isSigninModal} close={closeSigninModal} header="로그인 창" userHasAuthenticated={userHasAuthenticated}>
                    로그인 모달 창 입니다.
                </SigninModal>
                <button onClick={openSignupModal}>회원가입</button>
                <SignupModal open={isSignupModal} close={closeSignupModal} header="회원가입 창">
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
        </div>
    );
}

export default Menu;

//class 코드
// class Menu extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSigninModal: false,
//             isSignupModal: false,
//             user:[],
//             isAuthenticated:!!localStorage.getItem('token'),
//         };
//     }
//
//
//     // 회원가입이나 로그인이 성공했을 때 토큰을 저장
//     userHasAuthenticated = (authenticated, username, token) => {
//         this.setState({isAuthenticated: authenticated});
//         this.setState({user:username});
//         localStorage.setItem('token', token);
//     };
//
//     // 회원가입이나 로그인이 성공했을 때 modal을 변경해 로그인 버튼을 없애고 글쓰기 버튼과 정보버튼을 나오게하는 setModal
//     // useEffect의 두번째 인자는 모든 렌더링 후 두번째 인자가 변경될때에만 실행되라는 내용
//     useEffect=(()=>{
//         if (this.isAuthenticated) {
//             this.setState({ isSigninModal: true });
//         } else {
//             this.setState({ isSigninModal: false });
//         }
//     }, [this.isAuthenticated]);
//    
//     openSigninModal = () => {
//         this.setState({ isSigninModal: true });
//     };
//
//     closeSigninModal = () => {
//         this.setState({ isSigninModal: false });
//     };
//     openSignupModal = () => {
//         this.setState({ isSignupModal: true });
//     };
//
//     closeSignupModal = () => {
//         this.setState({ isSignupModal: false });
//     };
//
//     render() {
//         return (
//             <div>
//                 <div style={{float: "right"}}>
//                     <button onClick={this.openSigninModal}>로그인</button>
//                     <SigninModal open={this.state.isSigninModal} close={this.closeSigninModal} header="로그인 창" userHasAuthenticated={this.userHasAuthenticated}>
//                         로그인 모달 창 입니다.
//                     </SigninModal>
//                     <button onClick={this.openSignupModal}>회원가입</button>
//                     <SignupModal open={this.state.isSignupModal} close={this.closeSignupModal} header="회원가입 창">
//                         회원가입 모달 창 입니다.
//                     </SignupModal>
//                     <Link to="/mypage">마이페이지</Link>
//                     <button onClick={()=>window.open('/chatting','_blank')}>채팅창</button>
//
//
//                 </div>
//
//
//                 <ul className="menu" >
//                     <li><NavLink exact to="/">스터디 목록</NavLink></li>
//                     <li><NavLink to="/community">커뮤니티</NavLink></li>
//                     <li><NavLink to="/studymanagement">내 스터디 관리</NavLink></li>
//                 </ul>
//             </div>
//         );
//     }
// };
//
// export default Menu;