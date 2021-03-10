import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./LeagueDetails.css";
import male from "../../assets/male.png";
import female from "../../assets/female.png";

const LeagueDetails = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState([]);
  const {
    strBanner,
    strBadge,

    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,

    strDescriptionEN,
    strDescriptionDE,

    strFacebook,
    strTwitter,
    strYoutube,
  } = league;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeague(data.leagues[0]);
      });
  }, [idLeague]);
  let gender = strGender && strGender.toLowerCase();
  console.log(gender);
  return (
    <div>
      <div className="details ">
        <div className="text-center py-3">
          <img className="img-logo" src={strBadge} alt="..." />
        </div>
        <div className="container league-detail">
          <div className="row">
            <div className="col-md-9">
              <h2>{strLeague}</h2>
              <h6>Founded: {intFormedYear}</h6>
              <h6>Country: {strCountry}</h6>
              <h6>Sport Type: {strSport}</h6>
              <h6>Gender: {strGender}</h6>
            </div>
            <div className="col-md-3">
              {gender && gender === "male" ? (
                <img className="img-details" src={male} alt="..." />
              ) : (
                <img className="img-details" src={female} alt="..." />
              )}
            </div>
          </div>
        </div>
        <div className="container my-5">
          <p>{strDescriptionEN}</p>
          <p>{strDescriptionDE}</p>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
