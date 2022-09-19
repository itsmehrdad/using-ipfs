import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {uploadFileToIPFS} from './pinata';




function App() {
 
const [fileUrl , setFileURL]= useState(null);

async function OnChangeFile(e) {
  var file = e.target.files[0];
  //check for file extension
  try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if(response.success === true) {
          console.log("Uploaded image to Pinata: ", response.pinataURL)
          setFileURL(response.pinataURL);
      }
  }
  catch(e) {
      console.log("Error during file upload", e);
  }
}
  return (
    <div>
          <input type={"file"} onChange={OnChangeFile}></input>
          { fileUrl  && (<img src={fileUrl} />)}
    </div>
  );
}

export default App;
