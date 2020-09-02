import React, { useEffect } from 'react';
import './App.css';
import ThreeImporter from './ThreeImporter';
import * as bimU from 'bimu.io.viewer';

const onPorgress = (e) => console.log(e); // Callback that reports model loading progress.
const onLoaded = (e) => console.log(e); // Callback when model is fully loaded.
const onError = (e) => console.log(e); // Callback when model fails to load.

const viewerContainerStyle = {
  width: "1000px",
  height: "500px",
  backgroundColor: "black",
  border: "5px solid black",
  textAlign: "center",
  margin: "20px"
}

function App() {

  useEffect(() => {
    // Viewer configuration object
    let viewerConfigs = {
      domElementId: "viewer",
      showUI: true
    };

    // Initialise a Viewer 
    let viewer = new bimU.Viewer(viewerConfigs);
    viewer.initialize();

    // Model configuration object
    let modelConfigs = {
      modelId: "YOUR_MODEL_ID",
      // Either access token or password must be specified
      password: "YOUR_PASSWORD",
      accessToken: "YOUR_ACCESS_TOKEN"
    };

    // Load a model
    viewer.loadModel(modelConfigs, onPorgress, onLoaded, onError);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          bimU.io Viewer API Example
        </h1>
        <a
          className="App-link"
          href="https://docs.bimu.io/developer/getting-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Documentation
        </a>
        <div id="viewer" className="viewer-container"></div>
      </header>
    </div>
  );
}

export default App;
