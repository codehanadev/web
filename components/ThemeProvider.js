
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as ThemeProviderUI } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffcc00',
    },
  },
});

export default function ThemeProvider(props) {
  return <>
    <CssBaseline />
    <ThemeProviderUI theme={theme}>
      {props.children}
    </ThemeProviderUI>
  </>;
}