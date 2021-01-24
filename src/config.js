export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "octank-ml-auth-uploads-serbel"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_oHu2OVRvW",
      APP_CLIENT_ID: "25qto3vujhsd1vfjvav5p3l104",
      IDENTITY_POOL_ID: "us-east-1:d1682880-cd37-4061-b481-f86e9de77815"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://xv6f3udio0.execute-api.us-east-1.amazonaws.com/dev",
      API_NAME: "SecurityAIAPI"
    },
    social: {
      FB: "2002492656520412"
    }
  };