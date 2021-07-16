import React, {Component, useEffect, useState} from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import "../assets/css/navlink.css"

function Menu(props) {
    const [isSigninModal,setIsSigninModal]=useState(false);
    const [isSignupModal,setIsSignupModal]=useState(false);
    const [isJoinLogin,setIsJoinLogin]=useState("")
    const [user, setUser] = useState([]);
    let [isAuthenticated, setisAuthenticated] = useState(!!localStorage.getItem('user'));
    const history = useHistory()

    const openSigninModal = () => {
        setIsSigninModal(true)
        setIsJoinLogin("로그인")
    };

    const closeSigninModal = () => {
        setIsSigninModal(false)
        setIsJoinLogin("")
    };
    const openSignupModal = () => {
        setIsSigninModal(true)
        setIsJoinLogin("회원가입")
    };

    const closeSignupModal = () => {
        setIsSigninModal(false)
        setIsJoinLogin("")
    };

    const handleLogout = () => {
        setisAuthenticated(false);
        setUser('');
        localStorage.removeItem('user');
        setIsSigninModal(false);
        history.push('/');
    };// 로그아웃

    const userHasAuthenticated = (authenticated, email, token) => {
        setisAuthenticated(authenticated);
        setUser(email);
        let arr=[email,token]
        localStorage.setItem('user', JSON.stringify(arr));
    };// 회원가입이나 로그인이 성공했을 때 토큰을 저장

    // 회원가입이나 로그인이 성공했을 때 modal을 변경해 로그인 버튼을 없애고 글쓰기 버튼과 정보버튼을 나오게하는 setModal
    // useEffect의 두번째 인자는 모든 렌더링 후 두번째 인자가 변경될때에만 실행되라는 내용
    // useEffect(()=>{
    //     if (isAuthenticated) {
    //         setIsSigninModal(false);
    //     } else {
    //         setIsSigninModal(true);
    //     }
    // }, [isAuthenticated]);

    // console.log(JSON.parse(localStorage.getItem("user")))
    return (
        <div>
            <div style={{float: "right"}}>
                {
                    isAuthenticated===false
                        ? (
                            <>
                                <button onClick={openSigninModal}>로그인</button>
                                <SigninModal isOpen={isSigninModal} isjoinlogin={isJoinLogin} signin={openSigninModal} signup={openSignupModal} close={closeSigninModal} header="로그인 창" userHasAuthenticated={userHasAuthenticated}>
                                    로그인 모달 창 입니다.
                                </SigninModal>
                                <button onClick={openSignupModal}>회원가입</button>
                                <SignupModal isOpen={isSignupModal} isjoinlogin={isJoinLogin} close={closeSignupModal} header="회원가입 창">
                                    회원가입 모달 창 입니다.
                                </SignupModal>
                            </>
                        )
                        :(
                            <>
                                <Link to="/mypage" username={user}>마이페이지</Link>
                                <button onClick={()=>window.open('/chatting','_blank')}>채팅창</button>
                                <button onClick={handleLogout}>로그아웃</button>
                            </>
                        )
                }

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