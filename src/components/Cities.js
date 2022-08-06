import "../scss/styles/cities.scss";
import { Link } from 'react-router-dom'
const Cities = ({ cities, removeCity }) => {
  return cities.map((city, index) => (
    <div key={index} className="cityContainer">
      <Link className="link" to={`/weather/${city.name}`}>
        <h3 className="name">
          {city.name}
        </h3>
      </Link>
      <div className="delete" onClick={() => removeCity(city.name)}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  ))
}

export default Cities;
