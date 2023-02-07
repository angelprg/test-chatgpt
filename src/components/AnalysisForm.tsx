import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useInputTextStore from "../stores/useInputText";
import classifyText from "../utils/classifyText";
import generateQuestion from "../utils/generateQuestion";
import Result from "./Result";

const AnalysisForm = () => {
  const { text, setText } = useInputTextStore();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleText = (text: string) => {
    setText(text);
    setResult("");
  };
  const handleAnalyze = async () => {
    setLoading(true);
    const analysisResult = await classifyText(text);
    setResult(analysisResult);
    setLoading(false);
  };

  const handleGenerateSample = async (sentiment: "positive" | "negative") => {
    setLoading(true);
    const question = await generateQuestion(sentiment);
    setText(question || "");
    setLoading(false);
  };

  return (
    <>
      <Grid container gap={3} justifyContent="center">
        <Grid item xs={5}>
          <TextField
            label="Text to analyze"
            variant="outlined"
            value={text}
            onChange={(e) => handleText(e.target.value)}
            fullWidth
            multiline
            maxRows={5}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography>
            Generate a sample text as if it were written by one of the
            assistants
          </Typography>
          <Grid container justifyContent={"space-around"}>
            <Grid item justifyContent={"center"}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleGenerateSample("positive")}
              >
                Positive
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => handleGenerateSample("negative")}
                color="error"
              >
                Negative
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAnalyze}>
            Analyze
          </Button>
        </Grid>
        {result && (
          <Grid item xs={12}>
            <Result result={result} />
          </Grid>
        )}
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => setLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default AnalysisForm;
