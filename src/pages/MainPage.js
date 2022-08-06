import { useState, useRef } from 'react';
import '../scss/styles/mainPage.scss';
import Cities from '../components/Cities';
import AddNewPopup from '../components/AddNewPopup';

const MainPage = ({ cities, setCities }) => {
  const [input, setInput] = useState('');
  // const [cities, setCities] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const inputRef = useRef();
  const addCity = (city) => {
    if (city.name === '') return;
    const newCities = [...cities, city];
    setCities(newCities);
  }
  const removeCity = name => {
    const removedArr = [...cities].filter(city => city.name !== name);
    setCities(removedArr);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const onClick = () => {
    setOpenModal(true);
    addCity({
      name: input
    })
    setInput('');
    inputRef.current.value = '';
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addCity({
      name: input
    })
    setInput('');
    inputRef.current.value = '';
  }
  return (
    <div className="mainPage">
      <div className="topBar">
        <h2>List of Cities</h2>
        <div className="right">
          <form className="searchBar" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Search..." onChange={handleChange} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          <button onClick={onClick}><i className="fa-solid fa-plus"></i> Add new</button>
        </div>
      </div>
      <Cities cities={cities} removeCity={removeCity} />
      {openModal && <AddNewPopup closeModal={setOpenModal} addCity={addCity} />}
    </div>
  )
}

export default MainPage;
