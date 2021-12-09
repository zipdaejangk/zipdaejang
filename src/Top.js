import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = styled.div`
    position: absolute;
    width: 1920px;
    height: 81px;
    left: 0px;
    top: 0px;
    background: rgba(255, 255, 255, 0.06);
    z-index: 6;
    img{

    }
    p{
      display: none;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      position: absolute;
      width: 155px;
      height: 28px;
      left: 1741px;
      top: 26px;
      flex: none;
      order: 2;
      flex-grow: 0;
      margin: 0px 0px;
      font-family: NanumSquareRound;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
    }
  `;



function TopLine() {
  return (
    <div>
      
      

      { /*Top*/ }
      <Top>
        <img src="" className="" alt = ""/>        
        <p><Link to = "Login" style={{textDecoration:"none", color:"white"}}>로그인&nbsp;&nbsp;|</Link>
        <Link to = "/Login/LoginCertified/signin" style={{textDecoration:"none", color:"white"}}>&nbsp;&nbsp;회원가입</Link></p>
      </Top>


    </div>
  );
}

export default TopLine;
