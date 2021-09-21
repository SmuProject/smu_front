import React from "react";
import "./nav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="relative">
        <nav>
          <ul>
            <div className="a">
              <li>
                <Link to="/">홈</Link>
              </li>
              {/* <li><Link to='/user'>소환사 검색</Link></li> */}
              <li>
                <Link to="/champion">챔피언별 승률 검색</Link>
              </li>
              <li>
                <Link to="/line">라인별 승률 검색</Link>
              </li>
              <li>
                <Link to="/complex">조합 승률 검색</Link>
              </li>
              <li>
                <Link to="/item">아이템 티어 순위 검색</Link>
              </li>
              <li>
                <Link to="/leader">리더보드</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
