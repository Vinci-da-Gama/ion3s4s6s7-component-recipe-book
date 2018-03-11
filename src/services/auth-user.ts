import firebase from 'firebase';

export class AuthUserService {

	fbSignup(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	}

	fbSignin(email: string, password: string) {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	fbLogout() {
		firebase.auth().signOut();
	}

	fbGetActiveUser() {
		return firebase.auth().currentUser;
	}

	fbGetActiveUserToken() {
		return firebase.auth().currentUser.getToken();
	}

}
