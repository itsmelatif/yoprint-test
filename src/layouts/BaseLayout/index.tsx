import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { NavBar } from "@/components/sections";

const BaseLayout: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%", m: 0, p: 0 }}>
        <NavBar />
      </Box>

      <Container sx={{ mt: 4 }} maxWidth={false}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default BaseLayout;
