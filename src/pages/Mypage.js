import React, {useState} from 'react';
import '../assets/css/myPage.css';
// import "./user.json";


function Mypage(props){
    const email=JSON.parse(localStorage.getItem("user"))[0]

    return (
        <div>
            <main>
                <h2>User Profile</h2>
                <div className="userProfile">
                    <div className="accountInfo">
                        <div className="section-left">
                            <h5>picture</h5>
                            <div className="picture-area">
                                <span className="profile-picture"><img/></span>
                                <label className="input-file-btn" for="input-file">추가/변경</label>
                                <input type="file" id="input-file" style={{display:"none"}}/>
                                {/* <input type="file" onChange="{setFile.bind(this)}"/>
                                <input type="button" onClick="{postFile}" value="upload"/>                                         */}
                            </div>
                            
                        </div>        
                        <div className="section-right">
                            <div className="section-userinfo">
                                <h5>Username</h5>
                                <input type="text" placeholder="username" readOnly/>

                                <h5>Email</h5>
                                <p type="text">{email}</p>

                                <h5>My ratings</h5>
                                <span>5.0점</span>
                                {/* <button>코멘트 보기</button> 스텝업 개발*/}
                            </div>
                            <div className="section-emblems">
                                <div className="emblem">
                                    <h5>My Emblem</h5>
                                    <div className="list-emblem-img">
                                        {/* {myEmblems.map(emblem => {
                                            <img id={emblem}/>
                                        })} */}
                                        <img/>
                                        <img/>
                                        <img/>
                                    </div>
                                    <a href="/EmblemModal"><button className="emblem-btn">관리하기</button></a>
                                </div>

                            </div>
                            <div className="section-region">
                                <div className="region">
                                    <h5>region</h5>
                                    <div class="dropdown" name="region">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="section-certificate">
                                <div className="certificate">
                                    <h5>Certificates</h5>
                                        <a href="CertificateModal"><button className="certificate-btn">등록하기</button></a>
                                    <div class="dropdown" name="certificate">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Mypage;