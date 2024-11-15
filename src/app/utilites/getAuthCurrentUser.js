import { Auth } from "aws-amplify";

export default async function getAuthCurrentUser() {
  try {
    // Check if the user is authenticated
    const currentUser = await Auth.currentAuthenticatedUser();
    console.log("Authenticated user:", currentUser);

    const userAttributes = await Auth.userAttributes(currentUser);
    const email_verified = userAttributes.find(
      (attr) => attr.Name === "email_verified"
    ).Value;

    const session = await Auth.currentSession();
    const accessTokenPayload = session.getAccessToken().decodePayload();
    const idTokenPayload = session.getIdToken().decodePayload();

    const userRole = accessTokenPayload["cognito:groups"];
    const email = idTokenPayload.email;
    const userId = idTokenPayload.sub;

    return { userId, email, email_verified, userRole };
  } catch (err) {
    if (err === "not authenticated") {
      console.error("User is not authenticated");
    } else {
      console.error("Error fetching authentication details:", err);
    }
  }
}
