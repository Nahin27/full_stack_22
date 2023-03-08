import Header from "./Header.js"
import Parts from "./Parts.js"
import Total from "./Total.js"

const Course = ({ course }) => ( //course is an object with name, id and parts attribute
  <div>
    <Header name={course.name} />
    <Parts parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course