import { Container } from "@mui/material";
import AppBar from "@/component/AppBar";
import BoardBar from "./BoardBar";
import { BoardContent } from "./BoardContent";

export default function Board() {
  return (
    <Container
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
      maxWidth={false}
      disableGutters
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}
