import AWS from "aws-sdk";

//configuracion de aws
AWS.config.update({
    region:"us-east-1"
});

//DYNAMODB
const dynamoDB = new AWS.DynamoDB.DocumentClient();//crear la instancia de la base de datos
const dynamoTableName = "productos-Table";

//SNS
const sns = new AWS.SNS(); //intancia del servicio de mensajeria
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:755234995471:notificacionesEmail";

export {dynamoDB, dynamoTableName, sns,SNS_TOPIC_ARN}