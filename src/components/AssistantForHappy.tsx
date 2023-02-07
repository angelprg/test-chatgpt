import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const AssistantForHappy = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Howard Hamlin"
          src="https://chorus.stimg.co/21394153/ows_150948754350969.jpg?fit=crop&crop=faces"
        />
      </ListItemAvatar>
      <ListItemText
        primary="Howard Hamlin"
        secondary={
          "Enhances customer experience by providing a warm and welcoming atmosphere through their friendliness and enthusiasm."
        }
      />
    </ListItem>
  );
};

export default AssistantForHappy;
