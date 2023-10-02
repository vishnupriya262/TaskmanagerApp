import '../App.css';
import CustomButton from './CustomButton';

function Header(props) {
  return (
    <div className="header">
     <h1 >Task manager</h1>
     <div className="btnWrapper">
      <CustomButton click={props.handleInput} name='Add' bg='#FF6D28' color='white'/>
   </div>

      
    </div>
  );
}

export default Header;