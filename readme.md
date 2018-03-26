# AWS CloudFormation
Exploring AWS CloudFormation templates...

#### Ec2
##### ec2-00.yaml
Basic EC2 (linux) instance creation 

##### ec2-01-eip-sq.ysml
EC2 (Linux) instance creation configured with an Elastic IP and two security groups

#### S3
##### s3-00-bucket.yaml
The least amount of configuration required to create an S3 bucket via CloudFormation.

#### Lambda
##### lambda-00.yaml
Creating lambda using CloudFormation.  The lambda-00.py script should first be packaged and
uploaded to an S3 bucket.  Within the template: 
* Bucket name (S3Bucket) and key (S3Key) are used within the
template to specify the code location.
* ExecutionRole is used to identify the IAM role the function
will assume during execution

A JSON payload of
 
    {
        "firstname": "John"
        "lastname": "Doe",
    }
    
can be used to test the function through the AWS Management Console.

Don't forget to delete your stacks :exclamation: