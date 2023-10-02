import { Box } from "@mui/material";

export default function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trello.BoardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Bar
    </Box>
  );
}
