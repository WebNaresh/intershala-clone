import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNavaigation from "./utils/TopNavigation/TopNavaigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./utils/Footer/Footer";
import Speeder from "./utils/Speeder/Speeder";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <UseState>
          <TestState>
            <UseEffectState>
              <TopLoadingBar />
              <TopNavaigation />
              <AppLoader />
              <AppAlert />
              <Speeder />
              <Route />
              <Footer />
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
