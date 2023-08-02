import Card from "./Card";
function CardList({Robots}){
return(
<div>{
Robots.map((user,i)=>{
       return (
    <Card
        key={i} 
         id={Robots[i].id}
         name={Robots[i].name} 
         username={Robots[i].username}
         email={Robots[i].email}
          />
       );
    })
}
  </div>
);
};

export default CardList;