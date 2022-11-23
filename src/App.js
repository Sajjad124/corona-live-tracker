import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import pk from "../src/Images/pk.jpg";
import "./App.css";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ width: "100%", display: { xs: "block", sm: "block" } }}
    >
      Corona-App
    </Box>
  );
}

export default App;
