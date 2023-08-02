import CardList from "./CardList";
import "./App.css";
import robots from './Robots';
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>Robofriends</h1>
      <input
        type="search"
        className="pa2 br3 w5"
        placeholder="Search Robot"
        onChange={handleInputChange}
        value={searchValue}
      />
      <CardList Robots={filteredRobots} />
    </div>
  );
}

export default App;
