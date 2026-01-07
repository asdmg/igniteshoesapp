import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreated(email: string) {
  OneSignal.User.addTag("user_email", email);
}

export function tagUserEmailDeleted() {
  OneSignal.User.removeTag("user_email");
}
