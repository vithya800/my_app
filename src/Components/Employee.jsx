
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Employee() {
  const employees = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Rahul" },
  ];

  return (
    <Box>
      <Grid
        container
        sx={{
          minHeight: "710px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            // width: {
            //   xs: "90%",
            //   sm: "70%",
            //   md: "40%",
            // },
            backgroundColor: "skyblue",
            padding: "30px",
          }}
        >
          <h1>EMPLOYEE DIRECTORY</h1>

          {employees.map((employee) => (
            <Box
              key={employee.id}
              sx={{
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <h3>ID: {employee.id}</h3>
              <h3>Name: {employee.name}</h3>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Employee;
