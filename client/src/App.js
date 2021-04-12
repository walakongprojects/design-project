import React from 'react';
import {
  Image,
} from 'cloudinary-react';
import UploadImage from './components/imageUploadTest';
import UploadImageTwo from './components/imageUploadTestTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Image cloudName="dpgjysglx" publicId="chillhotel/hotel/601b11a2ac579a2c1ce79ea6" width="300" crop="scale" />
        <UploadImage defaultImage={null} />
        <UploadImageTwo />
      </header>
    </div>
  );
}

export default App;
