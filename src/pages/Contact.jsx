import gmail from '../assets/images/gmail.png'; // or .svg
import iphone from '../assets/images/iphone.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/svg/github.svg'

const Contact = () => {
  return (
    <div id="contact" className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center gap-12'>
        <div>
          <div className='flex text-center my-12 text-5xl font-bold z-10 
                              bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat 
                              [background-position:100%_90%] [background-size:50%_35%]'
          >
            Like my work? <br/>
            Let’s talk business.
          </div>
        </div>
        <div className='grid grid-cols-4 h-auto w-1/2 gap-24'>
          <a href="https://www.linkedin.com/in/anthonydo2307/" className='flex justify-center items-center'>
            <img src={linkedin} alt="linkedin logo" className='h-3/4'/>
          </a>
          <a href="https://github.com/antoinnedo/" className='flex justify-center items-center'>
            <img src={github} alt="github logo" className=''/>
          </a>
          <a href="mailto:anthonydo2307@gmail.com">
            <img src={gmail} alt="gmail logo" />
          </a>
          <a href="tel:+16823061796" className='-translate-x-1/4'>
            <img src={iphone} alt="iphone icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;