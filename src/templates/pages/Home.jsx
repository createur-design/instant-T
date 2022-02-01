import React, { useEffect, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
export const Home = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="startPage">
      <div className="dateNow">
        <p>Time is {date.toLocaleTimeString({ timeZone: "UTC" })}</p>
        <p className="weekdayNow">
          {new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            timeZone: "UTC",
          }).format(date)}
          <span className="dayNow">
            {new Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              timeZone: "UTC",
            }).format(date)}
          </span>
        </p>
        <p className="monthNow">
          {new Intl.DateTimeFormat("en-GB", {
            month: "long",
            timeZone: "UTC",
          }).format(date)}
        </p>
        <div className="et">&</div>
      </div>
      <div className="infosStart">
        <p>
          <CommentIcon className="icon" />
          Welcome to <span className="fontInstant">Instan'T</span>
        </p>
        <p>You want to know how to create you're first event ?</p>
        <p className="colorTurquoise">read more...</p>
      </div>
    </main>
  );
};
