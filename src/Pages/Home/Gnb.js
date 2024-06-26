import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom';


const GnbLeft = styled.div`
  height: 100%;
  display : flex;
  align-items: center;
`;

const GnbRight = styled(GnbLeft)`
  display : flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  margin-left: 40px;
`;

const Li = styled.li`
  cursor: pointer;
  margin-right: 40px;
  color: #d9d9d9;
  font-size: 16px;
`

const GnbCover = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background: #000;
`



const Gnb = () => {


const GnbArea = () => {  
  const navigate = useNavigate(null)

    return(
        <div>
            <GnbCover>
              <GnbLeft>
                <img src={`${process.env.PUBLIC_URL}img/tving-logo.svg`} alt='logo' style={{height:"100%",cursor:"pointer"}} onClick={()=>{navigate('/')}}/>
                <Ul>
                  <Li>시리즈</Li>
                  <Li>영화</Li>
                  <Li>라이브</Li>
                  <Li>파라마운트+</Li>
                </Ul>
              </GnbLeft>
              <GnbRight>
                <div><i className="fa-solid fa-magnifying-glass" style={{cursor:"pointer",color:"#d9d9d9"}}></i></div>
                <div style={{marginLeft:"40px"}}><img src={`${process.env.PUBLIC_URL}img/tving_icon.webp`} alt='icon' style={{width:"30px", height:"30px", cursor:"pointer"}} /></div>
              </GnbRight>
            </GnbCover>
        </div>
    )
}

  return (
    <>  
        <GnbArea />
    </>
  )
}

export default Gnb