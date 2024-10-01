import React from "react";
import { PoseViewer } from 'react-pose-viewer';
import examplePose from "./example.pose";

const App = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.viewerContainer}>
        <PoseViewer
          src="https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_pose?spoken=en&signed=ase&text=hello"
          loop
          autoplay
          height="600px"
          padding="10px"
          playbackRate={1.5}
          background="000"
          thickness={3}
        />
      </div>
      <div style={styles.viewerContainer}>
        <PoseViewer
          src={examplePose}
          loop
          autoplay
          aspectRatio={16 / 9}
          width="400px"
          background="transparent"
          thickness={1}
        />
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  viewerContainer: {
    flex: 1,
    margin: '0 10px',
  },
};

export default App;
