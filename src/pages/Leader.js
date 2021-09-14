import {React, useState, useRef} from 'react';
import CreateUser from './CreateUser';
import CreateUser2 from './CreateUser2';
import './leader.css';
import UserList from './UserList';

function Leader(){
    const [isShowing, setisShowing] = useState(false);

    const openModal = () => {
        setisShowing(true);
    };

    const closeModal = () => {
        setisShowing(false);
    };
    
    const [inputs, setInputs] = useState({
        username:''
    });
    const {username} = inputs;

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

   
    const nextId = useRef(2);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username
        };
        setUsers([...users, user]);
        setInputs({
            username:''
        });
        console.log(nextId.current);
        nextId.current += 1;
    }
    const [users, setUsers] = useState([
        {
            id: 1,
            username:'알콩이'
        }
    ])

    

    return(
        <>
        <div className='leaderBtn'>
            <button type='submit' className='searchBtn' onClick={openModal}>내 아이디 등록하기</button>
        </div>

        {isShowing &&
        <div className='modal-wrapper' >
            <div className='modal'>
                <div className='modal-title'>내 아이디 등록하기</div>
                <p className='modalT'>학교 이메일을 입력해주세요.</p>
                <input className='modalB' placeholder='학교이메일'></input>
                <button className='selectB'>인증</button>
                <p className='modalT'>인증번호를 입력해주세요.</p>
                <input className='modalB' placeholder='인증번호'></input>
                <button className='selectB'>확인</button>
                <p className='modalT'>소환사이름을 입력해주세요.</p>
                {/* <input className='modalB' placeholder='소환사이름' ></input>
                <button className='selectB'>등록</button> */}
                <CreateUser2 username={username} onChange={onChange} onCreate={onCreate}></CreateUser2>

                <div className='close-wraper'>
                    <button id='close' onClick={closeModal}>닫기</button>
                </div>
            </div>
        </div>}

        <div className= 'grey'>
        <div className='idList'>
            <table className='leaderTable'>
                <tr>
                    <th>순위</th>
                    <th>아이디</th>
                </tr>
            </table>
            <div>
            <UserList users={users}></UserList>
            </div>
        </div>
        </div>

        <div className='ldBox'>
            {/* <input className='inputBox' placeholder='소환사 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button> */}
            <CreateUser username={username} onChange={onChange} onCreate={onCreate}></CreateUser>
        </div>
        </>
    );
}

export default Leader;