import {useState} from 'react'
import './FirstSectionItems.css'
interface HoverContainer {
    img: string
    details: string
    discount: string
}

const HoverContainer: React.FC<HoverContainer> = ({ img, details, discount }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='relative overflow-hidden rounded-xl group'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img className='rounded-xl group-hover:scale-105 transition-transform duration-300' src={img} alt="" />
            <p className='absolute bottom-20 w-full flex justify-center font-semibold text-black text-xl'>{details}</p>
            <div className='absolute  inset-0 samsung-font flex flex-col items-center justify-end pb-4 text-center leading-none'>
                <span className={`span-transition  ${isHovered ? 'span-hidden' : ''}`}>{discount}</span>
                <button className={`button-transition btn_Default ${isHovered ? 'button-visible' : ''}`}>Comprar ahora</button>
            </div>
        </div>
    );
};


export default HoverContainer