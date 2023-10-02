import { Box } from "@mui/material";

export const BoardContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) =>
          `cacl(100vh -${theme.trello.navBarHeight} - ${theme.trello.BoardBarHeight})`,
      }}
    >
      Main content
    </Box>
  );
};
