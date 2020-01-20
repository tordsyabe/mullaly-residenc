import firebase from '../firebase';

export const saveBoarder = boarder => {
  return firebase
    .firestore()
    .collection('boarders')
    .add(boarder);
};
