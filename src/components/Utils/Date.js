import moment from "moment";
import React from "react";

export default function Date({ date }) {
  const momentDate = moment(date, "YYYY MM DD hh:mm:ss");
  return <b className="date">{momentDate._d.toString().slice(3, 15)}</b>;
}
