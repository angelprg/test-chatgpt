import { List, Typography } from "@mui/material";
import React, { FC } from "react";
import AssistantForAngry from "./AssistantForAngry";
import AssistantForHappy from "./AssistantForHappy";

type ResultOption = "positive" | "negative" | "neutral";
interface Props {
  result: string; //"positive" | "negative" | "neutral";
}

const resultMap = {
  positive: <AssistantForHappy />,
  negative: <AssistantForAngry />,
  neutral: (
    <>
      <AssistantForHappy />
      <AssistantForAngry />
    </>
  ),
};

const Result: FC<Props> = ({ result }) => {
  const key = (result || "neutral") as ResultOption;
  return (
    <div>
      <Typography>
        The incoming message has been identified as {result}. It is recommended
        to assign this conversation to:
      </Typography>
      <List>{resultMap[key]}</List>
    </div>
  );
};

export default Result;
