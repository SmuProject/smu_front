import React, {Component} from 'react';
import Input from '../components/common/Input';
import './home.css';
import menu1 from '../assets/images/menu1.jpg';
import menu2 from '../assets/images/menu2.jpg';
import menu3 from '../assets/images/menu3.jpg';
import menu4 from '../assets/images/menu4.jpg';
import menu5 from '../assets/images/menu5.jpg';
import { Link } from 'react-router-dom';

class Home extends Component{
    handleCreate = (data) => {
        console.log(data);
    }

    render(){
    return (
        <>
        <div>
            <Input
                onCreate={this.handleCreate}
                history ={this.props.history}
        />
        </div>

        <div className='img-box'>
            <div className='box'>
                <Link to='/champion'>
                <img src={menu1} className='homeimg'/>
                </Link>
                <div class="title">챔피언별 승률 검색</div>
            </div>
            <div className='box'>
                <Link to='/line'>
                <img src={menu2} className='homeimg'/>
                </Link>
                <div class="title2">라인별 승률 검색</div>
            </div>
            <div className='box'>
                <Link to='/complex'>
                <img src={menu3} className='homeimg'/>
                </Link>
                <div class="title3">조합 승률 검색</div>
            </div>
            <div className='box'>
                <Link to='/item'>
                <img src={menu4} className='homeimg'/>
                </Link>
                <div class="title4">아이템 티어 순위 검색</div>
            </div>
            <div className='box'>
                <Link to='/leader'>
                <img src={menu5} className='homeimg'/>
                </Link>
                <div class="title5">리더보드</div>
            </div>
        </div>
        </>
    );
    }
}

export default Home;
