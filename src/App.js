import theme from "./themes/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
