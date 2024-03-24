import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './MeetMe.css';
import meet from '../../Assets/meetme.avif'
import meet2 from '../../Assets/meetme2.jpg'
import frontscreen from '../../Assets/front.jpg';

function MeetMe()
{
    return (
        <div className="MeetMeContainer">
             <Header background={frontscreen}/>
             <div className='MeetMeSub'>
                <h3>Meet Me</h3>
                <div className='MeetText'>
                    <h4>
                    Hey there! Nice to meet you! I'm Shafiq, and welcome to my blog,
                     Young Wanderer. Here, I share stories and adventures from my travels, 
                     along with some thoughts about life. I'm just a regular guy in his 30s
                      who loves to travel a lot, usually on my own so I can do what I want.
                       Some say I'm both cynical and kind, which is probably true. If you like chaos,
                        honesty, sarcasm, and thinking you're funnier than you really are, then stick 
                        around! Don't leave just yet
                    </h4>
                   <img src={meet2} width="100%" height="100%"/>
                   <h4>
                   Hey there! Great to see you here; it feels like destiny!

I’m Shafiq, and welcome to my blog, Young Wanderer. Here, you'll find a laid-back space where I share stories and mishaps from my travels over the years, along with some thoughts on life.

I’m just your average guy on an adventure, though at 33, it might be a stretch to call my life extraordinary. But hey, I love to travel, and I do it a lot. I usually go solo because it means I don't have to compromise.

A friend once called me cynical yet kind, which is surprisingly accurate. So if you’re into chaos, honesty, sarcasm, and people who think they're funnier than they are, then you're in the right place. Don’t go running off just yet!

                    </h4>
                   <img src={meet} width="100%" height="100%"/>
                </div>
             </div>
             <Footer/>
        </div>
    )
}

export default MeetMe;
