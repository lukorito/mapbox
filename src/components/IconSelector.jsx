import React from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaDollarSign,
  FaUniversity,
  FaUtensils,
  FaHospital,
  FaRoad,
  FaShoppingCart,
  FaLeaf,
  FaPeopleCarry,
  FaChurch,
  FaSchool
} from "react-icons/fa";

const IconSelector = ({ name }) => {
  switch (name) {
    case "Administrative Offices and Services across the Border":
      return <FaBuilding size="1.5em" />;
    case "Business and Financial Service Intitutions/Services":
      return <FaDollarSign size="1.5em" color="#22BA46" />;
    case "Education Facilities and Institutions":
      return <FaUniversity size="1.5em" color="#A5673F" />;
    case "Entertainment and Hospitality Facilities and Services":
      return <FaUtensils size="1.5em" color="#A333C8" />;
    case "Health Facilities,Centres and institutions":
      return <FaHospital size="1.5em" color="#B5CC17" />;
    case "Roads,Bridges and other Infastructure based services when accessing when Crossing the Border":
      return <FaRoad size="1.5em" color="#A5673F" />;
    case "Market and Trade Facilities":
      return <FaShoppingCart size="1.5em" color="#F2711D" />;
    case "Natural Resource eg Water Source,Lake,Swamp,Mineral Deposit":
      return <FaLeaf size="1.5em" color="#22BA46" />;
    case "NGO/FBO/Society or Community Focus/Based Organizations":
      return <FaPeopleCarry size="1.5em" color="#03B5AD" />;
    case "Religious Intitutions and Services ( Church,Mosques)":
      return <FaChurch size="1.5em" color="#A333C8" />;
    case "Social Amenities and Services":
      return <FaSchool size="1.5em" color="#767676" />;
    default:
      return <FaMapMarkerAlt size="3em" />;
  }
};

export default IconSelector;
