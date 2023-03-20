import styled from 'styled-components'; 
import suny from  "../../assets/image/sun.png";
import "./our.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;  
`;
 const RightContainer = styled.div` 
`; 
 const Container = styled.div` 
`; 
const LeftContainer = styled.div` 
    top: 100px;
    left: 300px;
    position: absolute;
`; 


const Our = () => {
  return (
    <SectionWrapper>
      
      
      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      > 
      <p className="small-cli">
        Make sure to check us on Instagram <br/>
        Follow us on Twitter  <br/>
Shalom Tech 2023.
      </p>
      </LeftContainer>
      <RightContainer
          data-scroll
          data-scroll-delay=".15"
          data-scroll-speed="1">
          <img src={suny} alt="" className="cielce" />
          <img src={suny} alt="" className="cielce-one" />
          <a href="https://docs.google.com/document/d/1Ked_XQ1iikulTpAajlQ-e3Ul-Mfse_8DSG5Rm0xZ9uw/edit?usp=sharing" className="my-link">Document</a>
 
        <p className="title-our-one"></p>
        <div className="box-one-our">
          <p className="des-our">
            
          </p>
        </div>
        <div className="box-two-our">
          <p className="des-our">
            
          </p>
        </div>
        <div className="box-three-our">
          <p className="des-our">
           
          </p>
        </div>
        <div className="box-four-our">
          <p className="des-our">
           
          </p>
        </div> 
      </RightContainer>
      <Container
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1">
           <p className="title-our-two"></p>
           <div className="box-five-our">
          <p className="des-our">
           
          </p>
        </div> 
        <p className="title-our-three"></p>
        <div className="box-six-our">
          <p className="des-our">
           
          </p>
        </div> 
        <div className="box-seven-our">
          <p className="des-our">
            
          </p>
        </div> 
        <div className="box-eight-our">
          <p className="des-our">
           
          </p>
        </div> 

      </Container>
    </SectionWrapper>
  );
};

export default Our;
