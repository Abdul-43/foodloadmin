import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import Lists from "./components/Lists/Lists";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="app-nav-bar">
      <NavigationBar />

      <Grid
        h={"calc(100vh - 60px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="green.400">
          <SideBar />
        </GridItem>
        <GridItem colSpan={4} bg="grey.500">
          <Routes>
            {routes.length > 0
              ? routes.map((r, i) => (
                  <Route key={i} path={r.path} element={<r.component />} />
                ))
              : null}
          </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
