import TopLine from '../Top';
import Foote from '../Footer';
import styled from "styled-components";
//import { Link } from "react-router-dom";

/*-----------------------Customer_Sognin------------------------*/

/*-------------------------JS-------------------------------*/

//SMS API Wating

/*Btn active
let input = document.querySelector(".input");
let button = document.querySelector(".button");
button[0].disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".input").value === "") {
    document.getElementById("Button").disabled = true;
  } else {
    button.disabled = false;
  }
}*/

/*-------------------------CSS-------------------------------*/

/*BackGround_img*/ 
const StyledDiv = styled.div`
      position: absolute;
      width: 1920px;
      height: 1080px;
      left: 0px;
      top: 0px;
      background: linear-gradient(107.15deg, #940E3C 24.37%, #03161B 135.66%);
  `;

/*Login_box_2*/ 
const LoginBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 100px 24px 60px;
        position: absolute;
        width: 480px;
        height: 514px;
        left: 720px;
        top: 261px;
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
            h1{
                padding: 0px 92px 0px 91px;
                position: absolute;
                width: 432px;
                height: 30px;
                left: 50px;
                top: 0px;
                flex: none;
                order: 0;
                flex-grow: 0;
                margin: 56px 0px;
            }
            h2{
                position: absolute;
                width: 183px;
                height: 48px;
                left: 172px;
                top:180px;
                font-family: NanumSquareRound;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #000000;             
                flex: none;
                order: 0;
                flex-grow: 0;
                margin: 0px 10px;
                }
            input{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 20px 28px 16px;
                position: absolute;
                width: 72px;
                height: 72px;
                top: 280px;
                border: 1px solid #000000;
                box-sizing: border-box;
                border-radius: 8px;
                flex: none;
                order: 3;
                flex-grow: 0;
                margin: 0px 8px;
            }   
            h3{
                position: absolute;
                width: 312px;
                height: 64px;
                left: 111px;
                top: 373px;
                font-family: NanumSquareRound;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 32px;
                text-align: center;
                color: #0064FF;
                flex: none;
                order: 1;
                flex-grow: 0;
                margin: 16px 0px;
            }
            button{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 24px 32px;
                position: absolute;
                width: 432px;
                height: 72px;
                left: 53px;
                top: 470px;
                background: #F2F3F4;
                border-radius: 8px;
                flex: none;
                order: 0;
                flex-grow: 0;
                margin: 32px 0px;
                p{
                    position: absolute;
                    width: 368px;
                    height: 24px;
                    left: 158px;
                    top: 24px;
                    font-family: NanumSquareRound;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 24px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #ADB8C2;
                    flex: none;
                    order: 0;
                    flex-grow: 0;
                    margin: 0px 10px;
                }
            }
            p{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                position: absolute;
                width: 198px;
                height: 23px;
                left: 169px;
                top: 578px;
                flex: none;
                order: 1;
                flex-grow: 0;
                margin: 32px 0px;
                border-bottom:2px solid #286555
            }
`;


function CustomerCertify() {
  return (
    <div>
      { /*BackGround_Color*/ }
      <StyledDiv></StyledDiv>
      
      { /*상단바 Components /Top.js*/ }
      <TopLine/>

      { /*Login_box*/ }
    

        { /*Second*/ }
        <LoginBox>
          <h1>로그인 및 회원가입 </h1>
          <h2>인증번호가 발송되었습니다.<br/>코드를 입력하세요.</h2>
          <input type="text" maxLength="1" style={{left:"102px"}}/>
          <input type="text" maxLength="1" style={{left:"182px"}}/>
          <input type="text" maxLength="1" style={{left:"262px"}}/>
          <input type="text" maxLength="1" style={{left:"342px"}}/>
          <button type="button"><p style={{textDecoration:"none", color:"#ADB8C2", border:"none"}}>인증하기</p></button>
          
          <h3>Sms 인증 api 확인후 타이머기능 적용예정</h3> 
          { /*Sms 인증 api 확인후 수정예정*/ }
          <p>인증번호가 발송되지 않았나요?</p>
        </LoginBox>
      

      { /*Footer*/ }
      <Foote/>

    </div>
  );
}

export default CustomerCertify;
