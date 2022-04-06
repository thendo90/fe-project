import moment from "moment";
import React from "react";

export default function Date({ date }) {
  const momentDate = moment(date, "YYYY MM DD hh:mm:ss");
  return <em className="date">{momentDate._d.toString().slice(3, 15)}</em>;
}
