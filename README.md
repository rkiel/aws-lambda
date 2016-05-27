#### AWS Lambda

Create the project

    mkdir -p ~/GitHub/rkiel
    cd ~/GitHub/rkiel
    git clone https://github.com/rkiel/aws-lambda.git
    cd aws-lambda

# AWS Console

Create a new user

* click **IAM**
* click **Users**
* click **Create New Users**
* enter `aws-lambda-lab`

Generate credentials

* check **Generate an access key for each user**
* click **Create**
* click **Download Credentials**

Grant user permissions

* click **IAM**
* click **Users**
* click **aws-lambda-lab**
* click **Permissions**
* click **Attach Policy**
* type in **lambda**
* check **AWSLambdaFullAccess**
* click **Attach Policy**

Create a new role

* click **IAM**
* click **Role**
* click **Create New Role**
* type **lambda-execution**
* click **Next Step**
* click **AWS Service Roles**
* click **Select** in AWS Lambda
* type **lambda**
* check **AWSLambdaExecute**
* click **Next Step**
* click **Create Role**

NOTE: remember the ARN

# OS X

Parse out the AWS credentials

```unix
grep aws-lambda-lab ~/Downloads/credentials.csv |awk  -F "\"*,\"*" '{print $2}' > aws_access_key_id.txt
grep aws-lambda-lab ~/Downloads/credentials.csv |awk  -F "\"*,\"*" '{print $3}' > aws_secret_access_key.txt
```

Start up vagrant

```unix
vagrant up

vagrant ssh node

cd /vagrant
```
