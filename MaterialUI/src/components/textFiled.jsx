import { AccountCircle } from "@mui/icons-material";
import { Box, MenuItem, TextField } from "@mui/material";


const textFiled = () => {
  const names = [
    { name: "Rashed" },
    { name: "Ismat" },
    { name: "Labib" },
    { name: "Shamim" },
    { name: "Rakib" },
  ];
  return (
    <div>
      {" "}
      <Box component="form" noValidate className="border m-10 rounded">
        <h2 className="p-5">Material UI</h2>
        <TextField
          error
          // defaultValue="My Name is Rashed"
          className=""
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Enter your name"
          helperText="Name is requred."
          multiline
          maxRows={4}
        />
        <h2 className="mt-10">Select option</h2>
        <div>
          <AccountCircle />
          <TextField
            select
            label="Select Actual Name"
            helperText="Select right option"
            defaultValue="Rashed"
            className="w-full"
            variant="filled"
          >
            {names.map((name) => (
              <MenuItem key={name.name} value={name.name}>
                {name.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </div>
  );
};

export default textFiled;
