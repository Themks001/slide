import {Link} from 'react-router-dom'
const universe = () => {
  return (
   <>
    <div className='universe'>
    <div>
     <h1>Sun</h1>
     <p>The Sun is a massive, luminous ball of hot plasma at the center of our solar system. It is the primary source of light and energy, influencing the orbits and climates of the planets.</p>
    </div>
    <div>
     <h1>Mercury</h1>
     <p>Mercury is the smallest and closest planet to the Sun, characterized by extreme temperature variations due to its lack of a substantial atmosphere. It completes an orbit around the Sun in just 88 days.</p>
    </div>
    <div>
     <h1>Venus</h1>
     <p>Venus is Earth's neighboring planet with a thick, toxic atmosphere primarily composed of carbon dioxide. Known for its brilliant appearance in the night sky, Venus has a slow, retrograde rotation</p>
    </div>
    <div>
     <h1>Earth</h1>
     <p>Earth is the third planet from the Sun and the only known celestial body supporting life. It features diverse ecosystems, an active atmosphere, and a complex geology that sustains a rich variety of species.</p>
    </div>
    <div>
     <h1>Mars</h1>
     <p>Mars, often called the "Red Planet," exhibits a distinctive reddish hue due to iron oxide on its surface. It has polar ice caps, a thin atmosphere, and ongoing exploration missions to study its potential for past or present life.</p>
    </div>
    <div>
     <h1>Jupiter</h1>
     <p>Jupiter is the largest planet, characterized by its prominent gas giant status. It has a powerful magnetic field, numerous moons, and a remarkable feature known as the Great Red Spot, a massive storm.</p>
    </div>
    <div>
     <h1>Saturn</h1>
     <p>Saturn is renowned for its stunning ring system, composed mainly of ice particles and debris. This gas giant has a unique hexagonal cloud pattern at its north pole and numerous moons</p>
    </div>
    <div>
     <h1>Uranus</h1>
     <p>Uranus is an ice giant with a distinct feature: its axial tilt causes it to rotate almost on its side. It has a ring system and a bluish hue due to methane in its atmosphere.</p>
    </div>
    <div>
     <h1>Neptune</h1>
     <p>Neptune, the farthest known planet from the Sun, is an ice giant with a deep blue coloration. It exhibits strong winds and has a large storm called the Great Dark Spot, reminiscent of Jupiter's Great Red Spot.</p>
    </div>
    </div>
    <div><button>
      <Link to='/slide/next'>Next Chapter</Link>
     </button></div>
    </>
  )
}

export default universe