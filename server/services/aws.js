const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2', 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const params = {
  Bucket: 'my-inventory-app-bucket', 
};

s3.listObjectsV2(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});