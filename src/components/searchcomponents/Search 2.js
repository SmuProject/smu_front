import React from 'react';
import './search.css';
import Test from './Test';
import Info from './Info';
import Position from '../Position';
import Picked from './Picked';
import History from './History';
import Mininfo from './Mininfo';
import Score from '../Score';
import Levcs from './Levcs';
import Item from './Item';
import Team from './Team';
import Graph2 from './Graph2';
import Openedhied from './Openedhied';


// 소환사검색페이지
function search(){
    const disableddata = () => {

    }
    return(
        <div>
        <div className='UserName'>
            소환사이름
        </div>

        <div className='getNew'>
        <button type='submit' className='searchBtn'>갱신하기</button>
        </div>

        <div className='graph'>
            <Test />
        </div>

        <Info tier="마스터"  winrate = "65%"  photo = "photo" point= "75p"/>

        <div className='searchTop'>
            <div className='pieGraph'><Graph2/></div>
            <div className='mostPick'>
                <Picked pickedpic='바루스' champname='바루스' pickedrate='35%' win='3' lose='1' grade='2.44'/>
                <Picked pickedpic='애니' champname='애니' pickedrate='35%' win='2' lose='1' grade='2.44'/>
                <Picked pickedpic='바루스' champname='바루스' pickedrate='35%' win='3' lose='5' grade='2.44'/>
            </div>
            <div className='mostPosition'>
                <p>선호 포지션</p>
                <Position Linepic='' Linename='원딜' pickrate='55%' winrate='50%'/>
                <Position Linepic='' Linename='미드' pickrate='50%' winrate='40%'/>
            </div>
        </div>

        <div className='list'>
            <History type='솔랭' when='2' result='승리'/>
            <Mininfo minipic='' spell1='스펠1' spell2='스펠2' lun1='룬1' lun2='룬2' champname='쓰레쉬'/>
            <Score kill='7' death='3' assi='13' gra='3.5'/>
            <Levcs level='18' cs='250' Kasi='46'/>
            <Item/>
            <Team ID1='소환사ID1' ID2='소환사ID2' ID3='소환사ID3' ID4='소환사ID4' ID5='소환사ID5'/>
            <Team ID1='소환사ID6' ID2='소환사ID7' ID3='소환사ID8' ID4='소환사ID9' ID5='소환사ID10'/>
            <div className='back'>
            <Openedhied />
            </div>
        </div>

        <div className='list'>
            <History type='솔랭' when='2' result='승리'/>
            <Mininfo minipic='' spell1='스펠1' spell2='스펠2' lun1='룬1' lun2='룬2' champname='쓰레쉬'/>
            <Score kill='7' death='3' assi='13' gra='3.5'/>
            <Levcs level='18' cs='250' Kasi='46'/>
            <Item/>
            <Team ID1='소환사ID1' ID2='소환사ID2' ID3='소환사ID3' ID4='소환사ID4' ID5='소환사ID5'/>
            <Team ID1='소환사ID6' ID2='소환사ID7' ID3='소환사ID8' ID4='소환사ID9' ID5='소환사ID10'/>
            <Openedhied />
        </div>
        </div>
    );
}

export default search;
