import { Card, CardActions, CardContent, Typography } from "@mui/material";

type TemperatureProps = {
  label: string;
  temperature: string;
};

export default function Temperature(props: TemperatureProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary">{props.label}</Typography>
        <Typography color="text.primary">{props.temperature} °C</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
