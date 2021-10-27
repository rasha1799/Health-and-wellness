import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Service from "./Service/Service";

const ServiceDetail = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/gym.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <h2>this is service:{name}</h2>
      {/* s */}
      )
    </div>
  );
};

export default ServiceDetail;