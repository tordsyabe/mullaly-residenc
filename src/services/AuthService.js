import firebase from "../firebase";

export const signIn = (email, password) => {
  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    });
};
