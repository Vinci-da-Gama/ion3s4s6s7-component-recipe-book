import firebase from 'firebase';

export class AuthUserService {

	fbSignup(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	}

}
