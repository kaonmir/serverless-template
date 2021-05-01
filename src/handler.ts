import { Handler, Context } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  const name = event.pathParameters.name;

  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello World ${name}`
    })
  };

  return response;
};

export { hello };