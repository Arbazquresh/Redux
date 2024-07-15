import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";
import { Landing } from "./components/Landing";
import { CardContent, Card } from "@mui/material";

function App() {
  const myStore = configStore();
  return (
    <div>
      <Card>
        <CardContent>
          <Provider store={myStore}>
            <Landing />
          </Provider>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
