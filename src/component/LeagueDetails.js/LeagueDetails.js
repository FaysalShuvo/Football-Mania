import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./LeagueDetails.css";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import facebook from "../../assets/Icon/Facebook.png";

import twitter from "../../assets/Icon/Twitter.png";
import youtube from "../../assets/Icon/YouTube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

const LeagueDetails = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState([]);
  const {
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
  const fbLink = `https://${strFacebook}`;

  const twitterLink = `https://${strTwitter}`;
  const ytLink = `https://${strYoutube}`;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeague(data.leagues[0]);
      });
  }, [idLeague]);
  let gender = strGender && strGender.toLowerCase();

  return (
    <>
      <div className="details">
        <div className="text-center py-3 banner">
          <img className="img-logo" src={strBadge} alt="..." />
        </div>
        <div className="container league-detail">
          <div className="row">
            <div className="col-md-9">
              <h2>{strLeague}</h2>
              <h6>
                <FontAwesomeIcon className="mx-2" icon={faMapMarkerAlt} />
                Founded: {intFormedYear}
              </h6>
              <h6>
                <FontAwesomeIcon className="mx-2" icon={faFlag} />
                Country: {strCountry}
              </h6>
              <h6>
                <FontAwesomeIcon className="mx-2" icon={faFutbol} />
                Sport Type: {strSport}
              </h6>
              <h6>
                <FontAwesomeIcon className="mx-2" icon={faVenusMars} />
                Gender: {strGender}
              </h6>
            </div>
            <div className="col-md-3">
              {gender && gender === "mixed" ? (
                <img className="img-details" src={female} alt="..." />
              ) : (
                <img className="img-details" src={male} alt="..." />
              )}
            </div>
          </div>
        </div>
        <div className="container my-5">
          <p>{strDescriptionEN}</p>
          <p>{strDescriptionDE}</p>
        </div>
      </div>
      <div className="social-media d-flex justify-content-center">
        <ExternalLink href={fbLink}>
          <span>
            <img className="social-img" src={facebook} alt="..." />{" "}
          </span>
        </ExternalLink>
        <ExternalLink href={twitterLink}>
          <span>
            <img className="social-img" src={twitter} alt="..." />{" "}
          </span>
        </ExternalLink>
        <ExternalLink href={ytLink}>
          <span>
            <img className="social-img" src={youtube} alt="..." />{" "}
          </span>
        </ExternalLink>
      </div>
    </>
  );
};

export default LeagueDetails;
