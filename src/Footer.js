import styled from "styled-components";


const Footer = styled.div`
    padding: 48px 320px 38px;
    position: absolute;
    width: 1920px;
    height: 200px;
    left: 0px;
    top: 1080px;
    background: #F9FAFB;
    
    h1{
        position: absolute;
        width: 581px;
        height: 24px;
        left: 653px;
        margin: 50px 0px;
        font-size: 13px;
        font-weight: 500;
    }
    h2{
        position: absolute;
        width: 581px;
        height: 24px;
        left: 653px;
        top:140px;
        margin: 50px 0px;
        font-size: 10px;
        font-weight: 500;
    }
    p{
        position: absolute;
        width: 224px;
        height: 14px;
        left: 166px;
        top: 152px;
        font-family: NanumSquareRound;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #000000;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 69px 0px;
    }
  `;



function Foote() {
  return (
    <div>
      
      

      { /*Footer*/ }
      <Footer>
        <img src="" className="" alt = ""/>
        <h1>서비스 이용약관&nbsp;&nbsp;|&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;|&nbsp;&nbsp;결제 서비스 약관&nbsp;&nbsp;|&nbsp;&nbsp;위치기반 서비스 이용약관</h1>
        <h2>사업자등록번호: 000-00-00000&nbsp;&nbsp;|&nbsp;&nbsp;통신판매신고: 제 2021-경기파주-00000호&nbsp;&nbsp;|&nbsp;&nbsp;대표:이승태<br/>
        주소:경기도 파주시 야당동 1083, 9충 911호&nbsp;&nbsp;|&nbsp;&nbsp; 전화번호:1661-3835</h2>
        <p>ⓒ 2021 Zipdaejang. All Rights Reserved.</p>
      </Footer>


    </div>
  );
}

export default Foote;
