/*
  deploy-www.js

  Uses a command line to invoke AWS CLI and transfer files to S3
  AWS CLI must be properly configured with authorized IAM credentials for this to work.

  NOTE: I have my AWS CLI configured to run under the profile name "common"
*/

var exec = require("child_process").exec;

console.log('Preparing to push to S3')
exec("aws s3 sync . s3://www.commonre.com --exclude '.git/*' --exclude 'documentation/*' --exclude '.gitignore' --exclude deploy-www.js --profile common", function(err, stdout, stderr) {
    if (err) {
      throw('Error when pushing files to S3: ' + err);
    }

    console.log(stdout);
    console.log('Successfully pushed files to S3');

  });



