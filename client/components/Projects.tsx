import Givecredit from './Givecredit'
import Pingpong from './Pingpong'
import Veryimportantservice from './Veryimportantservice'

function Projects() {
  return (
    <div id="portfolio" className="divide-y divide-white divide-dashed ">
      <Pingpong />
      <Veryimportantservice />
      <Givecredit />
    </div>
  )
}

export default Projects
