import './cards.css';
import Mars2 from '../images/mars (3) 2.png'
import Mars3 from '../images/mars (3) 3.png'
import Mars1 from '../images/mars (3) 1.png'

function Cards() {

    return (
        <div className='cards-body' id='destination'>
            <div className='cards-body-heading'>A Stellar Selection</div>
            <div className='cards-body-text'>Explore three breathtaking destinations, each with its own unique charm and mystery.</div>
            <div className='cards-container'>
                <div className='cards-content'>
                    <div className='cards-background' />
                    <div className='cards'>
                        <img className='cards-image' src={Mars2} alt='Mars 2'/>
                        <div className='cards-heading'>Mars</div>
                        <div className='cards-block'></div>
                        <div className='cards-text'>Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</div>
                    </div>
                </div>
                <div className='cards-content'>
                    <div className='cards-background' />
                    <div className='cards'>
                        <img className='cards-image' src={Mars3} alt='Mars 3'/>
                        <div className='cards-heading'>Saturn</div>
                        <div className='cards-block'></div>
                        <div className='cards-text'>Experience weightlessness as you float among Saturn's rings to witness the grandeur of the gas giant from close quarters.</div>
                    </div>
                </div>
                <div className='cards-content'>
                    <div className='cards-background' />
                    <div className='cards'>
                        <img className='cards-image' src={Mars1} alt='Mars 1'/>
                        <div className='cards-heading'>Pluto</div>
                        <div className='cards-block'></div>
                        <div className='cards-text'>Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;