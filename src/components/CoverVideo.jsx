import styled from 'styled-components'; 
import { motion } from 'framer-motion';
import icon from "../assets/image/logo.png"; 
import circle from "../assets/image/sun.png"
import "./cover.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  color: white;
  
  
`;
const RightContainer = styled.div`
  position: absolute;
`; 

const LeftContainer = styled.div`
  position: absolute;
`; 

const Container = styled.div`
  position: absolute;
`; 

 
const TitleWrapper = styled(motion.div)`

`;




const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

 

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <LeftContainer>
      <div class="marquee">
     <div className='mart'>
      <span><i class="fa fa-truck"></i>Shalom</span>
      <span><i class="fa fa-cube"></i>Tech</span>
      <span><i class="fa fa-shield"></i>Shalom</span>
      <span><i class="fa fa-leaf"></i>Tech</span>
      <span><i class="fa fa-star"></i>Shalom</span> 
      <span><i class="fa fa-truck"></i>Tech</span>
      <span><i class="fa fa-cube"></i>Shalom</span>
      <span><i class="fa fa-shield"></i>Tech</span>
      <span><i class="fa fa-leaf"></i>Shalom</span>
      <span><i class="fa fa-star"></i>Tech</span>
      <span><i class="fa fa-truck"></i>Shalom</span>
      <span><i class="fa fa-cube"></i>Tech</span>
      <span><i class="fa fa-shield"></i>Shalom</span>
      <span><i class="fa fa-leaf"></i>Tech</span>
      <span><i class="fa fa-star"></i>Shalom</span>
      <span><i class="fa fa-truck"></i>Tech</span>
      <span><i class="fa fa-cube"></i>Shalom</span>
      <span><i class="fa fa-shield"></i>Tech</span>
      <span><i class="fa fa-leaf"></i>Shalom</span>
      <span><i class="fa fa-star"></i>Tech</span> 
      <span><i class="fa fa-truck"></i>Shalom</span>
      <span><i class="fa fa-cube"></i>Tech</span>
      <span><i class="fa fa-shield"></i>Shalom</span>
      <span><i class="fa fa-leaf"></i>Tech</span>
      <span><i class="fa fa-star"></i>Shalom</span>
      <span><i class="fa fa-truck"></i>Tech</span>
      <span><i class="fa fa-cube"></i>Shalom</span>
      <span><i class="fa fa-shield"></i>Tech</span>
      <span><i class="fa fa-leaf"></i>Shalom</span>
      <span><i class="fa fa-star"></i>Tech</span>
    </div>
  </div>
      </LeftContainer>
     <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".15"
            data-scroll-speed="3"
          >
           <p className="head-titl-one">Shalom Tech</p>
           <img src={circle} alt="" className="circle" />
           <p className="head-titl-two"></p>
           <p className="head-titl-three">20</p>
           <p className="head-titl-four">23</p>

           <div className="small-des-one">
           Shalom Hills International School <br />
           is proud to introduce the “Tech First” competition <br />
           

           </div>
           <div className="small-para-one">
             <br />
             This is going to be an inter-dynasty competition for classes 6th-12th. <br />
             The captains of individual dynasties are requested  <br />
             to list out names of the participants for different events
           </div>
          </motion.h1>
        </div>
      </TitleWrapper>
      <Container
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
    
        <img src={icon} alt="" className="logo" />
      </Container>
      <RightContainer>
        <div className="navlinks">
          <ul>
            
            <li><a href="https://www.instagram.com/chaniru.lk/">Contact</a></li>
            <br/>
            
          </ul>
        </div>
      </RightContainer>
    </SectionWrapper>
  );
};

export default CoverVideo;
