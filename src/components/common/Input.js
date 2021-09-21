import './input.css';
import React,{useState,useCallback} from 'react';

function Input({history}){

    const [name , setName] = useState("")
    const handleChange = useCallback(
        (e) => {
            setName(e.target.value)
        },
        [name],
    )

    const handleSubmit = useCallback(
        (e) => {
            console.log(history)
            // e.preventDefault();
            history.push("/champion")
            setName("")
        },
        [name],
    )

    return(
        <div>
            <form>
        <div className='searchBox'>
            <input name='name' className='inputBox' placeholder='소환사 이름을 입력해주세요.' value={name} onChange={handleChange}/>
            <button type='submit' className='searchBtn' onClick={handleSubmit}>검색하기</button>
        </div>
        </form>
        </div>
    );
}

export default Input;
