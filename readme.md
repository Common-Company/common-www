# www.commonre.com

This website is hosted on AWS S3.

To push code live, you need the AWS CLI installed, configured with authorized AWS IAM credentials

```
node deploy-www
```

**To push to S3 manually:**

Sync the directory with S3
```
aws s3 sync . s3://www.commonre.com --exclude '.git/*' --exclude 'documentation/*' --exclude '.gitignore' --profile common
```

List contents of S3 directory
```
aws s3 ls s3://www.commonre.com --profile common
```

Remove that thing you accidentally uploaded
```
aws s3 rm s3://www.commonre.com/documentation --recursive --profile common
```
