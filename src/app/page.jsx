'use client'

import RobotPage from "./components/RobotPage";
import {robotsData} from "./components/robotsData";
import SearchBox from "@/app/components/SearchBox";
import {useState} from "react";
export default function Home() {
    const [searchRobot , setSearchRobot] = useState("");


    const handleSearch =(e)=>{
      const robot= e.target.value;
      setSearchRobot(robot);
    }

      const filteredRobots = robotsData.filter(robot =>
          (robot.name.toLowerCase() || robot.id.toString()).includes(searchRobot.toLowerCase()));

  return (
    <main className="bg-gradient-to-r from-yellow-100 to-blue-300">

        <SearchBox onSearchChange={handleSearch} SearchField = {searchRobot}/>
        <RobotPage robots={filteredRobots} />

    </main>
  );
}


