
import FounderCard from './founder-card.component'

import robertUrl from '../../public/founders-pics/robert.png'
import soogsUrl from '../../public/founders-pics/soogs.png'


const robertPara = 'As a multi-talented filmmaker, Robert easily code-switches between various roles. Besides being the Creative Lead and Co-founder of Islet Studio, Robert is a Short Documentary Director, Tabletop Director, and Cinematographer who has worked for the likes of Grab, DC Asia, Tik Tok, Bumble, Certis, and Telstra. Drawn to filmmaking for its way of emotional engagement like no other, Robert isn’t afraid of breaking traditional storytelling conventions to create impactful and cherished films. When he is not obsessing about filmmaking, he enjoys longboarding, and attending to his exotic plants and beloved feline, Chiri.'

const soogsPara = 'Soo Ghee is the Co-founder of Islet Studio, Director, and Sound Engineer with 4 years of experience in the video production industry. Calm, collected, and with an eye for the bigger picture, Soo Ghee can always be counted on to make crucial decisions on set. He derives great pleasure from collaborative filmmaking, even the grueling hours it takes to bring a film to life. To him, it’s all worth it when the final cut is exactly as envisioned. In his downtime, Soo Ghee likes to catch up on the latest NBA highlights and is quite the wine enthusiast.'

function FounderSection() {
  return (
    <div className='founder-section-container'>
    <FounderCard name='Robert Chua' title='Co-Founder' imageUrl={robertUrl} para={robertPara} />
    <FounderCard name='Goh Soo Ghee' title='Co-Founder' imageUrl={soogsUrl} para={soogsPara}/>
    </div>
  )
}

export default FounderSection