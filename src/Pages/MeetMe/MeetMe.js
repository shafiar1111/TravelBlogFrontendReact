import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './MeetMe.css';
import meet from '../../Assets/meetme.avif'
import meet2 from '../../Assets/meetme2.jpg'

function MeetMe()
{
    return (
        <div className="MeetMeContainer">
             <Header/>
             <div className='MeetMeSub'>
                <h3>Meet Me</h3>
                <div className='MeetText'>
                    <h4>
                    Hello! You’ve found me, and I’m so glad you’re here; it’s meant to be!

So I’m Liz Carlson and welcome to my blog, Young Adventuress; a no-filter, vaguely chronological space filled with stories and misadventures about my travels over the years with some musings about life thrown in for good measure.

I’m that cliche “ordinary girl on an extraordinary journey” if one is allowed to say her own life is extraordinary at 33. Basically, I travel a lot. Usually alone too, that way I don’t have to compromise.

A friend once described me as cynical but kind in equal measure, a disturbingly accurate bio. If you’re a fan of chaos, brutal honesty, sarcasm, and girls who think they are wittier than they actually are, then you’ve come to the place. No, no don’t run away just yet.
                    </h4>
                   <img src={meet2} width="100%" height="100%"/>
                   <h4>
                    Hello! You’ve found me, and I’m so glad you’re here; it’s meant to be!

So I’m Liz Carlson and welcome to my blog, Young Adventuress; a no-filter, vaguely chronological space filled with stories and misadventures about my travels over the years with some musings about life thrown in for good measure.

I’m that cliche “ordinary girl on an extraordinary journey” if one is allowed to say her own life is extraordinary at 33. Basically, I travel a lot. Usually alone too, that way I don’t have to compromise.

A friend once described me as cynical but kind in equal measure, a disturbingly accurate bio. If you’re a fan of chaos, brutal honesty, sarcasm, and girls who think they are wittier than they actually are, then you’ve come to the place. No, no don’t run away just yet.
                    </h4>
                   <img src={meet} width="100%" height="100%"/>
                </div>
             </div>
             <Footer/>
        </div>
    )
}

export default MeetMe;
