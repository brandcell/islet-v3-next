
import FounderCard from './founder-card.component'

import robertUrl from '../../public/founders-pics/robert.png'
import soogsUrl from '../../public/founders-pics/soogs.png'


const robertPara = 'We believe joy is the engine that powers all the best ideas. So we’re designing a way of working that makes. We believe joy is the engine that powers all the best ideas. So we’re designing a way of working that makes.'

const soogsPara = 'We believe simple is magic, and business software should be elegant and intuitive—your tools for work should work for you. We believe joy is the engine that powers all the best ideas. So we’re designing a way of working that makes. We believe you should work the way you want. One person’s perfect workflow is another’s formula for burnout.'

function FounderSection() {
  return (
    <div className='founder-section-container'>
    <FounderCard name='Robert Chua' title='Co-Founder' imageUrl={robertUrl} para={robertPara} />
    <FounderCard name='Goh Soo Ghee' title='Co-Founder' imageUrl={soogsUrl} para={soogsPara}/>
    </div>
  )
}

export default FounderSection