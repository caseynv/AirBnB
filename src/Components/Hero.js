import jumbo from './images/photo grid.png';

function Hero() {
    return (
        <div className='Hero--content'>
            <img src = {jumbo} className='bd--img' />
            <div className='details--hero'>

                <h2 className='head--hero'>
                        Online Experiences
                </h2>
                <p className='head--content'>
                        Join unique interactive activities led by one-
                        of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
  }
  
  export default Hero;