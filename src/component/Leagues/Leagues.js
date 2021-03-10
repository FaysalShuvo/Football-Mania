import React, { useEffect, useState } from "react";
import SingleLeague from "../SingleLeague/SingleLeague";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const allLeagues = data.leagues;
        const leagues30 = allLeagues.slice(0, 30);
        setLeagues(leagues30);
      });
  }, []);

  return (
    <div className="container ">
      <div className="row">
        {leagues &&
          leagues.map((league) => (
            <SingleLeague league={league} key={league.idLeague} />
          ))}
        <SingleLeague />
      </div>
    </div>
  );
};

export default Leagues;
