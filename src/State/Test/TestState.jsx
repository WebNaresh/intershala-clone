import React from "react";
import { useContext } from "react";
import TestContext from "./TestContext";
import UseContext from "../UseState/UseContext";
export const TestState = (props) => {
  const { setAppAlert, setAppLoading } = useContext(UseContext);
  const [state, setState] = React.useState(false);
  const handleAlert = (alert, type, msg) => {
    setAppAlert({
      alert: alert || false,
      type: type || "success",
      msg: msg || "this is test message",
    });
  };
  const handleLoader = (load, color) => {
    setAppLoading({
      load: load || true,
      color: color || "#fff",
    });
    setTimeout(() => {
      setAppLoading({
        load: false,
      });
    }, 2000);
  };
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(value);
  };
  return (
    <TestContext.Provider
      value={{ handleAlert, handleLoader, toggleDrawer, state }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default TestState;
