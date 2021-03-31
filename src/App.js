import theme from "./themes/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Landing from "./components/Landing";
import FlipCard from "./components/FlipCard/FlipCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/" component={FlipCard} />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
