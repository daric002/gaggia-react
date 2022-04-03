import { Grid } from "@mui/material";
import Temperature from "./Temperature";

export default function Body(): JSX.Element {
  return (
    <main>
      <Grid container>
        <Grid item sm={6}>
          <Temperature label="Boiler" temperature="89"></Temperature>
        </Grid>
        <Grid item sm={6}>
          <Temperature label="Steam" temperature="120"></Temperature>
        </Grid>
      </Grid>
    </main>
  );
}
