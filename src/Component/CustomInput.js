import '../App.css';

function CustomInput(props) {
  return (
      <div className="inputWrapper">
        <label >{props.name}</label>
        <input value={props.value} className='inputForm' placeholder={props.placeHolder} onChange={props.change} type="text" />
      </div>
    
  );
}

export default CustomInput;