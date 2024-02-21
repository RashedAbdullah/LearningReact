import { Box, Button, IconButton } from "@mui/material";
import "./App.css";
import { DeleteIcon } from "@mui/icons-material/Delete";
import { SendIcon } from "@mui/icons-material/Send";

export default function ButtonUsage() {
  return (
    <div className="text-center p-20">
      <Box className="border">
        <div className="m-2">
          <Button
            variant="contained"
            // disabled={false}
            color="primary"
            // endIcon={<SendIcon />}
          >
            Submit
          </Button>
          <IconButton aria-label="delete">
            {/* <DeleteIcon ></DeleteIcon> */}
          </IconButton>
        </div>
      </Box>
    </div>
  );
}
