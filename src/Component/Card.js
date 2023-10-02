import '../App.css';
import CustomButton from './CustomButton';

function Card(props) {
  return (
    <div className='Card' style={{backgroundColor:props.complete==true &&'lightgreen',color:props.complete==true && 'brown'}}>
      <h2>{props.id}</h2>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className="btnWrapper">
          <CustomButton color='white' bg='#EA047E' name='Complete' click={props.update} />
          <CustomButton color='white' bg='darkred' name='Delete'click={props.delete}  />
        </div>

    </div>
  );
}

export default Card;