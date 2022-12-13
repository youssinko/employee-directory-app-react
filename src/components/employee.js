//template of list items after iterating over each data
import { Link } from "react-router-dom";
export default function Employee(props) {
 
  return (
    <div className="class-body">
     
      <img src={props.img} />
      <Link to={`/${props.name}`} className="name">{props.name}</Link>
      <p className="title">{props.title}</p>
      
    </div>
  );
}
