import logo from './img/logo.jpg'; 
import TopLine from './Top';
import Foote from './Footer';
import $ from "jquery";
import styled from "styled-components";
import { Link } from "react-router-dom";

/*------------------------------회원가입------------------------*/

/* 일반회원 회원가입 순서
App -> Customer[연락처입력] -> CustomerCertify[인증번호 기록]
*/

/* 중개사회원 회원가입 순서
App -> Estate[연락처입력] -> CustomerCertify[인증번호 기록]
*/


/*-----------------------MainPage------------------------*/

/*-------------------------JS-------------------------------*/

// windows.load 하였을경우, 실행
window.addEventListener("load",function(event) {
  aa();
},false);
 
//Exposure in order
var Time = 1000; //시간설정

function aa() {
  $( '.jb-1' ).animate( {
  opacity: '1'
  },Time,
  function(){ $( '.jb-1' ).animate( {
    opacity: '0'
    },Time,
    function(){ $( '.jb-2' ).animate( {
      opacity: '1'
      },Time,
        function(){ 
          $( '.jb-3' ).animate( {
          opacity: '1'
          })
          $( '.jb-4' ).animate( {
          opacity: '1'
          }); 
      
  })})})};

/*-------------------------CSS-------------------------------*/
/*BackGround_img*/ 
const StyledDiv = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
    z-index: 6;
      img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }
  `;

 /*Intro_Text*/
const Intro = styled.div`
   h1{
    position: absolute;
    width: 991px;
    height: 144px;
    left: 533px;
    top: 468px;
    font-family: NanumSquareRound;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 72px;
    color: white;
    text-align: center;
    opacity: 0;
    z-index: 6;
   }
    h2{
    position: absolute;
    width: 991px;
    height: 144px;
    left: 565px;
    top: 468px;
    font-family: NanumSquareRound;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 72px;
    text-align: center;
    color: white;
    opacity: 0;
    z-index: 6;
    }
  `;

 /*Locate_Btn_estate*/
const Locate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: center;
    padding: 0px;
    position: absolute;
    width: 224px;
    height: 72px;
    left: 724px;
    top: 668px;
    opacity: 0;
    z-index: 6;
      button{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        text-align: center;
        padding: 20px 16px;
        position: absolute;
        width: 232px;
        height: 60px;
        left: 0px;
        top: 60px;
        background: white;
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 8px;
        border:none;
      }
      p{
        position: absolute;
        height: 20px;
        left: 42px;
        top: 19px;
        font-family: NanumSquareRound;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: black;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 10px;
      }
    `;

 /*Locate_Btn_customer*/
 const Customer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      text-align: center;
      padding: 0px;
      position: absolute;
      width: 224px;
      height: 74px;
      left: 964px;
      top: 668px;
      opacity: 0;
      z-index: 6;
        button{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          text-align: center;
          padding: 20px 16px;
          position: absolute;
          width: 232px;
          height: 60px;
          left: 0px;
          top: 60px;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(94.45deg, #000000 23.92%, #03161B 152.32%);
          border-radius: 8px;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 8px;
          border:none;
        }
        p{
          position: absolute;
          height: 20px;
          left: 48px;
          top: 19px;
          font-family: NanumSquareRound;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 20px;
          display: flex;
          align-items: center;
          color: white;
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 10px;
        }
      
      
      
        `;

/*Locate_Btn_ad*/ 
const Ad = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: center;
    padding: 0px;
    position: absolute;
    width: 464px;
    height: 72px;
    left: 736px;
    top: 808px;
    opacity: 0;
    z-index: 8;
    border:1px solid white;
    border-radius: 8px;
      button{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        text-align: center;
        padding: 20px 16px;
        position: absolute;
        width: 464px;
        height: 60px;
        left: 10px;
        top: 0px;
        background: transparent;
        border:1px solid white;
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 8px;
        border:none;
      }
      p{
        position: absolute;
        height: 20px;
        left: 102px;
        top: 28px;
        font-family: NanumSquareRound;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: white;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 10px;
      }
    `;

/*-------------------------HTML-------------------------------*/    
function App() {
  return (

  <div>
      
      { /*BackGround_img*/ }
      <StyledDiv>
        <img src={logo} className="Main_logo" alt = "Main_logo" />
      </StyledDiv>

   
      { /*상단바 Components /Top.js*/ }
      <TopLine/>

      { /*Intro_Text*/ }
      <Intro>
          <h1 className="jb-1">안녕하세요.<br/>집대장에 오신걸 환영합니다.</h1>
          <h2 className="jb-2">집대장이 여러분이 원하는 집을 찾아드릴게요.<br/>집대장과 함께라면 든든합니다.</h2>
          
          { /*Locate_Btn_estate*/ }
          <Locate className="jb-3">
            <button>
            <Link to = "estate" style={{textDecoration:"none", color:"white"}}><p>부동산 종사자[비회원]</p></Link>
            </button>
          </Locate>

          { /*Locate_Btn_customer*/ }
          <Customer className="jb-3">
            <button>
            <Link to = "Customer" style={{textDecoration:"none", color:"white"}}><p>일반 사용자[비회원]</p></Link>
            </button>
          </Customer>

          </Intro>

          { /*Locate_Btn_ad*/ } 
          <Ad className="jb-4">
            <button>
            <Link to ="ad"><p>광고 파트너 제휴 신청</p></Link></button></Ad>          
    
      { /*Footer*/}
      <Foote/>
    </div>  
  );
}

export default App;
