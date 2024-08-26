import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signOut as FBsignOut } from "firebase/auth";
import { environment } from "../firebase";

export const auth = getAuth(environment);
export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password)
}
export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signOut() {
  return FBsignOut(auth);
}