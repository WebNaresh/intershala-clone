import React from "react";
import TopResult from "../../Home/Catogories/Popular/topResult/TopResult";

const ResultSection = () => {
  let job = {
    companyName: "Nipro India Corporation",
    jobName: "Operator",
    status: "green",
    contractorName: "S.P.Bhande",
    duration: "6 month",
    salary: 1400,
    companyLogo: "http://ssgmkhandala.org/images/gallery/1.jpg",
    contractorLogo: "http://ssgmkhandala.org/images/gallery/2.jpg",
  };
  return (
    <div>
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
    </div>
  );
};

export default ResultSection;
