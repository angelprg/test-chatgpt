import { Divider, Grid, List } from "@mui/material";
import AssistantForAngry from "./AssistantForAngry";
import AssistantForHappy from "./AssistantForHappy";

const Assistants = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <List
          sx={{
            width: "100%",
            maxWidth: 560,
            bgcolor: "background.paper",
            margin: "auto",
          }}
        >
          <AssistantForHappy />
        </List>
      </Grid>
      <Grid item xs={5}>
        <List
          sx={{
            width: "100%",
            maxWidth: 560,
            bgcolor: "background.paper",
            margin: "auto",
          }}
        >
          <AssistantForAngry />
        </List>
      </Grid>
    </Grid>
  );
};

export default Assistants;
