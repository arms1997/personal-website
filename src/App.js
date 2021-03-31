import theme from "./themes/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Landing from "./components/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Landing />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
