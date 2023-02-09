import React, { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import TestContext from "../Test/TestContext";
import UseEffectContext from "./UseEffectContext";
export const UseEffectState = (props) => {
  const { setProgress, location } = useContext(UseContext);
  const { handleLoader } = useContext(TestContext);
  const state = { name: "harry", class: "5b" };
  useEffect(() => {
    console.log(location);
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location]);
  useEffect(() => {
    window.scrollTo(0, 0);
    handleLoader(true, "blue");
  }, [location.pathname]);
  return (
    <UseEffectContext.Provider value={{ state, location }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
