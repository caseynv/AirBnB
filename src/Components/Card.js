
import img2 from './images/Star.png';

function Card(props) {
    console.log(props)
    return (
        <div className='card--content'>
            <img src="./Components/images/katie-zaferes.PNG" className='card--img' />
            <div className='card--stats'>
                <img src = {img2} className='star--img' />
                <span className='card--span'>{props.img}</span>
                <span className='card--span'>{props.img}</span>
                <span className='card--span'>{props.img}</span>
                <p className='card--pg'>{props.img}</p>
                <p className='card--pg1'><span>From $136</span> / person</p>
             </div>
        </div>
    )
  }
  
  export default Card;