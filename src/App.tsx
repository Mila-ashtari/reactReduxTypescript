import React from "react";
import { Provider, ProviderProps } from "react-redux";

import PictureList from "./componets/PictureList";
import { store } from "./state/store";
import "./App.css";

const providerProps: ProviderProps = {
  store: store,
};

function App() {
  return (
    <Provider {...providerProps} >
      <div className="App">
        <PictureList />
      </div>
    </Provider>
  );
}

export default App;
