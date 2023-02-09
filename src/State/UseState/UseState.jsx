import React, { useState } from "react";
import UseContext from "./UseContext";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
export const UseState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const location = useLocation();

  const [appAlert, setAppAlert] = useState({
    alert: true,
    type: "success",
    msg: "this is success alert",
  });

  const [appLoading, setAppLoading] = useState({
    load: false,
    color: "#fff",
  });

  const [progress, setProgress] = useState(0);

  const [utils, setutils] = useState({
    searchArray: [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 },
      { title: "The Godfather: Part II", year: 1974 },
      { title: "The Dark Knight", year: 2008 },
      { title: "12 Angry Men", year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: "Pulp Fiction", year: 1994 },
      {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
      },
      { title: "The Good, the Bad and the Ugly", year: 1966 },
      { title: "Fight Club", year: 1999 },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
      },
      {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
      },
      { title: "Forrest Gump", year: 1994 },
      { title: "Inception", year: 2010 },
      {
        title: "The Lord of the Rings: The Two Towers",
        year: 2002,
      },
      { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { title: "Goodfellas", year: 1990 },
      { title: "The Matrix", year: 1999 },
      { title: "Seven Samurai", year: 1954 },
      {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
      },
    ],
  });

  return (
    <UseContext.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
        appAlert,
        setAppAlert,
        appLoading,
        setAppLoading,
        progress,
        setProgress,
        location,
        utils,
        setutils,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
