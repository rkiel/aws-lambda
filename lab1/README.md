
```unix
aws lambda create-function --region us-east-1 --function-name HelloWorld --zip fileb://hello.zip --role arn:aws:iam::167460943148:role/lambda-execution --handler hello.handler --runtime nodejs --debug
```

```unix
aws lambda invoke-async  --function-name  HelloWorld --invoke-args input.json --debug
```
aws lambda delete-function --function-name HelloWorld
