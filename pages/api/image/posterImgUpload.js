import AWS from "aws-sdk";
import formidable from "formidable-serverless";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  // create S3 instance with credentials
  const s3 = new AWS.S3({
    endpoint: process.env.NEXT_PUBLIC_DO_SPACE_ENDPOINT,
    accessKeyId: process.env.NEXT_PUBLIC_DO_SPACE_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_DO_SPACE_SECRET_ACCESS_KEY,
  });

  // parse request to readable form
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    // Account for parsing errors
    if (err) return res.status(500);
    // Read file
    const file = fs.readFileSync(files.file.path);
    //Upload the file

    s3.upload({
      // params
      Bucket: "matta",
      ACL: "public-read",
      Key: `cybermatta-events-posters/${files.file.name}`,
      Body: file,
      ContentType: "image/jpg",
    })
    .send((err, data) => {
      if (err) {
        // console.log('err',err)
        return res.status(500);
      };
      if (data) {
        // console.log('data',data)
        return res.json({
          url:  data.Location,
        });
      };
    });
  });
};
