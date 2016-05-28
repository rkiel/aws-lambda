#### Lab 1

zip the function files

```unix
zip hello hello.js
```

create a lambda function

```unix
aws lambda create-function \
    --function-name HelloWorld \
    --region us-east-1 \
    --zip fileb://hello.zip \
    --role arn:aws:iam::999999:role/lambda-execution \
    --handler hello.handler \
    --runtime nodejs \
    --debug
```

invoke the lambda function

```unix
aws lambda invoke-async  \
    --function-name  HelloWorld \
    --invoke-args input.json \
    --debug
```

delete the lambda function

```unix
aws lambda delete-function \
    --function-name HelloWorld \
    --debug
```
