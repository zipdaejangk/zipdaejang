import TopLine from '../Top';
import Foote from '../Footer';
import styled from "styled-components";
import { Link } from "react-router-dom";

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

//loginbox_1 --> loginbox_2 active
/*function loginbox(){

  var box_1 = document.getElementsByClassName("loginbox_1");
  var box_2 = document.getElementsByClassName("loginbox_2");

  box_1[0].style.display = "none";
  box_2[0].style.display = "block";

}

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

/*Login_box+Login_box_1*/ 
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
    input{
      padding: 13px 16px;
      width: 432px;
      height: 70px;
      background: #FFFFFF;
      border: 1px solid black;
      box-sizing: border-box;
    }
    input:focus{
      border:1px solid black;
    }
    ul{
      li{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        position: relative;
        width: 432px;
        height: 92px;
        left: 30px;
        top: 280px;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: -44px;
      }
    }
    button{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px 32px;
      position: absolute;
      width: 432px;
      height: 72px;
      left: 48px;
      top: 462px;
      background: #F2F3F4;
      border: none;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 49px 0px;
      p{
        position:absolute;
        top:-1px;
        left:177px;
        font-family: NanumSquareRound;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
      }
    }
  `;


function Customer() {
  return (
    <div>
      { /*BackGround_Color*/ }
      <StyledDiv></StyledDiv>
      
      { /*상단바 Components /Top.js*/ }
      <TopLine/>

      { /*Login_box*/ }
      <LoginBox>
        <h1>로그인 및 회원가입</h1>

        { /*First*/ }
        <div className="loginbox_1">
          <input type='text' placeholder="이름" style={{position:"absolute" ,left:"49px", top:"203px" , borderRadius:"8px 8px 0px 0px"}}/>
          <input type='text' placeholder="전화번호" style={{position:"absolute" ,left:"49px", top:"273px" , borderRadius:"0px 0px 8px 8px"}}/> 
          <button type="button" style={{textDecoration:"none", color:"#ADB8C2",}}><Link to = "EstateCertify"><p>계속하기</p></Link></button>
          <ul>
            <li>・&nbsp;안전한 서비스 이용을 위하여 문자인증을 진행하고있습니다.<br/>&nbsp;&nbsp;타인의 개인정보를 도용할경우, 관계법에 의해 처벌될 수 있습니다.</li>
            <li>・&nbsp;문자 및 데이터 이용료가 부과될 수 있습니다.</li>
          </ul>
        </div>
      

        
      
      </LoginBox>  

      { /*Footer*/ }
      <Foote/>

    </div>
  );
}




export default Customer;
