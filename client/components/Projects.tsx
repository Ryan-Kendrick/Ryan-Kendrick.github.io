import Givecredit from './Givecredit'
import Pingpong from './Pingpong'
import Veryimportantservice from './Veryimportantservice'

function Projects() {
  return (
    <section id="portfolio" className="divide-y divide-white divide-dashed">
      <Pingpong />
      <Veryimportantservice />
      <Givecredit />
    </section>
  )
}

export default Projects
