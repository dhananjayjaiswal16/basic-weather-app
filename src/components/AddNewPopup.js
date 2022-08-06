import { useState } from 'react';
import '../scss/styles/addNewPopup.scss';
const AddNewPopup = ({ closeModal, addCity }) => {
  const [input, setInput] = useState('');
  const onClick = () => {
    addCity({
      id: 1,
      name: input
    })
    closeModal(false);
  }
  return (
    <div className="popupContainer">
      <div className="popup">
        <div className="header">
          <h2>Add new City</h2>
          <i onClick={() => closeModal(false)} className="fa-solid fa-xmark"></i>
        </div>
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Enter a city..." />
        <div className="btnContainer">
          <button className="btn1" onClick={() => closeModal(false)}>Close</button>
          <button className="btn2" onClick={onClick}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddNewPopup;
