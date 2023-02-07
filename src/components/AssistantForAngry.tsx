import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const AssistantForAngry = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Tuco Salamanca"
          src={`https://cdna.artstation.com/p/assets/images/images/038/224/732/medium/ninyorch-tuco-tr-0025.jpg?${parseInt(
            (Math.random() * 1000).toString()
          )}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary="Tuco Salamanca"
        secondary={
          "Excels at handling angry customers through their patience, empathy, and effective communication skills"
        }
      />
    </ListItem>
  );
};

export default AssistantForAngry;
