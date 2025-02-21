import { GiHamburgerMenu } from 'react-icons/gi';
const Hamburger = () => {

    return (
        <div className="relative flex md:hidden">
            <button type='button' >
                <GiHamburgerMenu />
            </button>
        </div>
    )
}

export default Hamburger
/**
 * md:hidden ile pc altındaki cihazlarda göruncek
 */