import { Grid, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Assistants from "./Assistants";

const AppDescription = () => {
  return (
    <div>
      <Typography component="h1" variant="h3">
        CHAT GPT Analyzis Test
      </Typography>
      <div>
        <SmartToyIcon fontSize="large" />
      </div>
      <Grid container gap={3} justifyContent="center">
        <Grid item xs={12} textAlign="left">
          <Typography variant="h6">Scenario</Typography>
          <Typography variant="body1">
            We have two assistants with distinct interpersonal abilities:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Assistants />
        </Grid>
        <Grid item xs={12} textAlign="left">
          <Typography variant="h6">Goal</Typography>
          <Typography variant="body1">
            When a Pro initiates a chat conversation, we aim to determine which
            assistant is best suited to assist them. Our system will analyze the
            Pro's first message to determine their mood, either positive or
            negative, and then automatically assign the appropriate assistant
            based on that analysis.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppDescription;
