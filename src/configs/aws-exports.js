export const awsExports = {
  Auth: {
    Cognito: {
      userPoolId: `${process.env.REACT_APP_COGNITO_USER_POOL_ID}`,
      userPoolClientId: `${process.env.REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID}`,
      identityPoolId: `${process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID}`,
      signUpVerificationMethod: "code",
      loginWith: {
        oauth: {
          domain: `${process.env.REACT_APP_COGNITO_OAUTH_DOMAIN}`,
          scopes: ["profile", "openid", "aws.cognito.signin.user.admin"],
          redirectSignIn: [
            `${process.env.REACT_APP_COGNITO_OAUTH_REDIRECT_SIGNIN_URL}`,
          ],
          redirectSignOut: [
            `${process.env.REACT_APP_COGNITO_OAUTH_REDIRECT_SIGNOUT_URL}`,
          ],
          responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
      },
    },
  },
};
