import { getCurrentUser } from "aws-amplify/auth";

export default async function getAuthCurrentUser() {
  try {
    const {  userId } = await getCurrentUser();
    console.log(`The userId: ${userId}`);
    return userId
  } catch (err) {
    console.log(err);
  }
}
