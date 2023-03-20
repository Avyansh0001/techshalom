import styled from 'styled-components'; 
import "./video.css"; 
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative; 
  display: flex;
  margin: 0 auto; 
`;
const RightContainer = styled.div` 
  position: absolute;
  text-transform: uppercase;
  color: rgb(224, 224, 224);
  font-family: richo; 
  font-size: 3em;
  text-align: center;
  top: 9%;
  left: 30%;
`; 

const Second = () => {
  return (
    <SectionWrapper>
      <RightContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
      <div className="directions">
       <p className="sub-work-one">Avyansh Clifford Ralph</p>
       <p className="sub-work-two">Yashveer Singh Tomar</p>
       <p className="sub-work-three">Bhavika Garg</p>
       <p className="sub-work-four">Madhavi Shrimal</p>
       <p className="sub-work-five">Atharva Zutshi</p>
       <p className="sub-work-six">Siddharth Gour</p>
       <br /> 
      
      </div>
      </RightContainer>
    </SectionWrapper> 
  );
};

export default Second;
