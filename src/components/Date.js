import moment from "moment";
import React from "react";

export default function Date({ date }) {
  const momentDate = moment(date, "YYYY MM DD hh:mm:ss");
  return <div className="date">{momentDate._d.toString().split("GMT")[0]}</div>;
}
