import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import { observer } from "mobx-react-lite";
import Homepage from "../../features/activities/home/Homepage";
import { Route, Routes, useLocation } from "react-router-dom";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/dashboard/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route
          path={"/*"}
          element={
            <>
              {" "}
              <Navbar />
              <Container style={{ marginTop: "7em" }}>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/activities" element={<ActivityDashboard />} />
                  <Route path="/activities/:id" element={<ActivityDetails />} />
                  <Route
                    path="/createActivity"
                    element={<ActivityForm key={location.key} />}
                  />
                  <Route
                    path="/manage/:id"
                    element={<ActivityForm key={location.key} />}
                  />
                </Routes>
              </Container>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default observer(App);
