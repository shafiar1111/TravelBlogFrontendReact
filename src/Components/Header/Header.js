import frontscreen from '../../Assets/front.jpg';
import './Header.css';
import logo from '../../Assets/logo.png';
function Header()
{
    return (
        <div className='headercontainer'>
        <img src={frontscreen} alt='front' height='100%' width='100%' className='img'/>
        <div className='navigation'>
            <nav>
                <h3>Home</h3>
                <h3>Meet Me</h3>
                <h3>The blog</h3>
                <h3>Destinations</h3>
                <h3>Moving Abroad</h3>
            </nav>
            <img src={logo} width='100' height='100px' className='logo'/>
            <nav>
                <h3>New Zealand</h3>
                <h3>Spain</h3>
                <h3>Bloggin</h3>
                <h3>Photography</h3>
                <h3>Register</h3>
            </nav>
        </div>
        <h1 className='wallheading'>Hi, I' m Shafi</h1>
        <h2 className='wallsubheading'>A normal boy living her biggest, messiest dreams.</h2>
        <button className='gettoknow'>
            Excited to Know Me
        </button>
      
        </div>
    );
}

export default Header;
