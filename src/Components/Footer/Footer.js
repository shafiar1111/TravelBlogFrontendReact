import './Footer.css';
import bg from '../../Assets/bg-footer.jpg';
function Footer()
{
  return <div>
    <div className="FooterContainer">
        <img src={bg} width="100%" height="100%" />
        <div className="FooterNavContainer">
            <div className="FooterSubContainerOne">
               <h4>Who is Young Adventuress?</h4>
               <h4>Hi, I'm Shafi, and I got my first taste for traveling when I was 16 years old. On my own, 12 years and 50 something countries later, my wanderlust has only grown 
                 and the list of countries I want to visit longer.
                 After living in Dublin for the past few years and returning home for a stint,
                  </h4>
            </div>
            <div className="FooterSubContainerOne">
               <h4>Featured Stories</h4>
               <h4>Story One</h4>
               <h4>Story Two</h4>
               <h4>Story Three</h4>
               <h4>Story Four</h4>
            </div>
            <div className="FooterSubContainerOne">
               <h4>Featured Stories</h4>
               <h4>Story One</h4>
               <h4>Story Two</h4>
               <h4>Story Three</h4>
               <h4>Story Four</h4>
            </div>
        </div>
    </div>
  </div>
}

export default Footer;