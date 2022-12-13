import Search from "./search";
import Header from "./header";
import Data from "../data";
import Items from "./listItem";

const AllEmployee = Data.map((ele, index) => {
  
  return <Items Key={index} {...ele} />
  

});


export default function HomePage(props) {
 
  return (
    <div className="home">
      <Header />
      <Search />
      <section>{AllEmployee}</section>
     
    </div>
  );
}
