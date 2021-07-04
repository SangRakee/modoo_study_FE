import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, StudyList, StudyManagement, Communities, Mypage } from './pages';
import Menu from './components/Menu';
import SigninModal from './components/SigninModal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <div>
                <button onClick={this.openModal}>로그인</button>
                <SigninModal open={this.state.isModalOpen} close={this.closeModal} header="로그인 창">
                    로그인 모달 창 입니다.
                </SigninModal>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/community" component={Communities}/>
                <Route path="/studymanagement" component={StudyManagement}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/signinmodal" component={SigninModal}/>
            </div>
        );
    }
}

export default App;

