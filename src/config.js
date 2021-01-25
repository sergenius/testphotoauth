export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "test6sup"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oDI6ApOko",
    APP_CLIENT_ID: "37cb136tceft505ppft852gvh9",
    IDENTITY_POOL_ID: "us-east-1:76824bd6-2b0c-4280-b1e2-726a0ddc04c9"
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