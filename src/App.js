import Album from "./components/album/Album";
import "./App.css";

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import { LinearProgress } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  const [imgUpload, setImgUpload] = useState(0);

  const fileSizeValidator = (file) => {
    const uploadedFile = file.target.files[0];
    if (uploadedFile.size > 40000000) {
      console.log("File size cannot exceed more than 40MB");
    } else {
      upload(uploadedFile);
    }
  };

  const upload = (file) => {
    console.log("uploaded file", file);
    setImgUpload(0);

    const target = {
      Bucket: "rhmybucket",
      Key: file.name,
      Body: file,
    };
    const creds = {
      accessKeyId: process.env.REACT_APP_aws_access_key_id,
      secretAccessKey: process.env.REACT_APP_aws_secret_access_key,
    };
    try {
      const parallelUploads3 = new Upload({
        client: new S3Client({
          region: "eu-central-1",
          credentials: creds,
        }),

        leavePartsOnError: false, // optional manually handle dropped parts
        params: target,
      });
      console.log(`parallel`, parallelUploads3);
      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });

      parallelUploads3.done();
      setImgUpload(100);
      console.log("file uploaded");
    } catch (e) {
      console.log("error", e.message);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <h1 className="App_Header">ALBUM</h1>
          <input
            type="file"
            onChange={fileSizeValidator}
            accept=".mp4,image/*, .mkv"
          />
          <LinearProgress
            variant="buffer"
            value={imgUpload}
            valueBuffer={imgUpload}
            color="secondary"
          />
          <Album />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
