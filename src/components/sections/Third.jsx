import styled from 'styled-components';  
import cover01 from "../../assets/image/Intro.png"
import cover02 from "../../assets/image/About us.png"
import cover03 from "../../assets/image/Outro.png"

import "./new.css"; 

const SectionWrapper = styled.section`
  min-height: 600vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto; 

`;

 

const LeftContainer = styled.div` 
  position: absolute; 
`; 
 
const Third = () => {
  return (
    <SectionWrapper>
      

      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
        <div className="slide-cover-one" data-scroll>
        <img src={cover01} alt="" className="cover-one" />
        <p className="cover-num-one">1</p>
        <p className="cover-title-one">
          Intro <br />
          &nbsp; 
        </p>
        <p className="cover-des-one">
          <br/>
           <br/>
           <br/>
         
        </p>
        </div> 
        <div className="slide-cover-two" data-scroll>
        <img src={cover02} alt="" className="cover-one" />
        <p className="cover-num-one">2</p>
        <p className="cover-title-one">
          About  <br />
          &nbsp; Us
        </p>
        <p className="cover-des-one">
           <br/>
           <br/>
           <br/>
          
        </p>
        </div><div className="slide-cover-three" data-scroll>
        <img src={cover03} alt="" className="cover-one" />
        <p className="cover-num-one">3</p>
        <p className="cover-title-one">
          Outro
        </p>
        <p className="cover-des-one">
           <br/>
           <br/>
          <br/>
         
        </p>
        </div> 
        
      </LeftContainer>  
    </SectionWrapper>
  );
};

export default Third;
