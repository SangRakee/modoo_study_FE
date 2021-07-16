import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import "../assets/css/modal.css"


function SigninModal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { isOpen, close, isjoinlogin ,header } = props;
    let [JoinLoign,setJoinLogin] = useState('로그인')
    const history = useHistory()
    // console.log(isjoinlogin)

    let [username, setUsername] = useState()
    let [userpassword, setUserPassword] = useState()


    var details = {
        'grant_type': 'password', //고정
        'scope' : 'webclient', // 고정
        'username': username, // 이 부분 유저주입으로 변경
        'password': userpassword, // 이부분 유저주입으로 변경
    };

    var data = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        data.push(encodedKey + "=" + encodedValue);
    }
    data = data.join("&");

    const handleNameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value)
    }


    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ isOpen ? 'openModal modal' : 'modal' }>
            { isOpen ? (
                <section>
                    <header>
                        {isjoinlogin}
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        {
                            isjoinlogin === '로그인'
                                ? (
                                <>
                                    <div className="loginForm">
                                        <input
                                            name="email"
                                            className="loginId"
                                            type="email"
                                            placeholder="아이디"
                                            onChange={handleNameChange}
                                        />
                                        <input
                                            name="password"
                                            className="loginPw"
                                            type="password"
                                            placeholder="비밀번호"
                                            onChange={handlePasswordChange}
                                        />
                                        <div className="loginOptions">
                                            <div className="loginSession">
                                                <input type="checkbox" id="loginSession"></input>
                                                <label for="loginSession">로그인 유지</label>
                                            </div>
                                            <div className="findMyAccount">
                                                <a href="/"><span>아이디/비밀번호 찾기</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loginSubmit">
                                        {/*<input class="loginSubmitBtn" type="submit" value="로그인하기"/>*/}
                                        <button class="loginSubmitBtn" onClick={(e)=>{
                                            e.preventDefault();
                                            axios.post('http://localhost:8090/user/oauth/token',
                                                data,
                                                {
                                                auth: {
                                                    username: 'studyapp',
                                                    password: 'study1234'
                                                },
                                                headers: {
                                                    'Content-Type': 'application/x-www-form-urlencoded'
                                                }
                                                })
                                                .then(response => {
                                                    console.log(response.data)
                                                    // user data와 token정보가 일치하면 로그인 성공
                                                    if (
                                                        response.data
                                                        && response.data.loginUser.gemail
                                                        && response.data.access_token
                                                    ) {
                                                        props.userHasAuthenticated(
                                                            true,
                                                            response.data.loginUser.gemail,
                                                            response.data.access_token);
                                                        history.push('/');
                                                        close()
                                                    } else {
                                                        alert('아이디 또는 비밀번호를 확인해주세요.');
                                                    }
                                                });
                                        }}>{isjoinlogin}</button>
                                    </div>
                                </>
                                )
                                :(
                                    <>
                                        <div className="loginForm">
                                            <div className="nicknameForm">
                                                <input
                                                    name="nickname"
                                                    className="loginId"
                                                    type="nickname"
                                                    placeholder="닉네임"
                                                    // onChange={this.loginHandler}
                                                />
                                                <button>중복확인</button>
                                            </div>

                                            <input
                                                name="location"
                                                className="location"
                                                type="location"
                                                placeholder="선호지역"
                                                // onChange={this.loginHandler}
                                            />
                                            <div className="signupSession">
                                                <input type="checkbox" id="category1"></input>
                                                <label htmlFor="signupSession">NCS/인적성</label>
                                                <input type="checkbox" id="category2"></input>
                                                <label htmlFor="signupSession">면접</label>
                                            </div>
                                            {/*{props.children} app값 불러오기*/ }
                                        </div>
                                        <div className="loginSubmit">
                                            {/*<input class="loginSubmitBtn" type="submit" value="로그인하기"/>*/}
                                            <button className="JoinLoign-button" onClick={(e)=>{
                                                e.preventDefault();
                                                const response = axios.get('http://choi1994.iptime.org:8000/user/'
                                                );
                                                console.log(response)
                                                // fetch('localhost:8090', {
                                                //     method: 'POST',
                                                //     headers: {
                                                //         'Content-Type': 'application/json'
                                                //     },
                                                //     body: JSON.stringify(data)
                                                // }).then(res => res.json())
                                                //     .then(json => {
                                                //         if (json.username && json.token) {
                                                //             props.userHasAuthenticated(
                                                //                 true,
                                                //                 json.username,
                                                //                 json.token);
                                                //             history.push('/');
                                                //             props.setModal(true);
                                                //         } else {
                                                //             // alert('사용불가능한 아이디입니다.');
                                                //         }
                                                //     });
                                                // .catch(error => alert(error));
                                            }}
                                            >{isjoinlogin}</button>
                                        </div>
                                    </>
                                )
                            }
                    </main>
                    <footer>
                        {
                            isjoinlogin === '회원가입'
                                ? (
                                    <>
                                        <div className="join">
                                            <button onClick={(e)=>{
                                                e.preventDefault();
                                                setJoinLogin('로그인');
                                                props.signin();
                                            }}>로그인화면 이동</button>
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                        <div className="googleLogin">
                                            <button>구글로 로그인하기</button>
                                        </div>
                                        <div className="join">
                                            <button onClick={(e)=>{
                                                e.preventDefault();
                                                setJoinLogin('회원가입');
                                                props.signup();
                                            }}>회원가입 화면 이동</button>
                                        </div>
                                    </>
                                )
                        }
                        {/* <div className="closeSection">
                            <button className="close" onClick={close}> close </button>
                        </div> */}
                    </footer>
                </section>
            ) : null }
        </div>
    )
}

export default SigninModal;