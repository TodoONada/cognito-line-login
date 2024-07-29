import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { signOut, signInWithRedirect } from "aws-amplify/auth";
import { Authenticator, View, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { awsExports } from "./configs/aws-exports";

function App() {
  const components = {
    SignIn: {
      Header() {
        return (
          <View padding="2rem">
            <Button
              variation="primary"
              className="service-color"
              isFullWidth={true}
              onClick={() =>
                signInWithRedirect({ provider: { custom: "LINE" } })
              }
            >
              LINEログイン
            </Button>
          </View>
        );
      },
    },
  };

  return (
    <Authenticator
      loginMechanisms={["username"]}
      hideSignUp={true}
      variation="modal"
      components={components}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button
            variation="primary"
            colorTheme="overlay"
            onClick={() => signOut()}
          >
            サインアウト
          </Button>
        </header>
      </div>
    </Authenticator>
  );
}

Amplify.configure(awsExports);

export default App;
