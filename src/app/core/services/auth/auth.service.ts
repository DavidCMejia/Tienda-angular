import { Injectable } from '@angular/core';

import { Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAdditionalUserInfo,
  OAuthProvider,
  linkWithPopup,
  unlink,
  updateEmail,
  updatePassword,
  User,
  reauthenticateWithPopup,
  authState,
  onAuthStateChanged } from '@angular/fire/auth';

  import { Observable, take } from 'rxjs';

//  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <User | null>

  constructor(private auth: Auth
  ) {
    this.user$ = user(auth);
    }

  async login(email: string, password: string):
    Promise<any> {
      return await signInWithEmailAndPassword(this.auth, email, password);
  }

 async logout():
 Promise<any>{
  return signOut(this.auth);
}


  async createUser(email:string, password:string):
  Promise<void> {

    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await updateProfile(
      credential.user, { displayName: credential.user.displayName }
    );
    await sendEmailVerification(credential.user);

    // create user in db

    }

    hasUser()
    {
      return authState(this.auth);
    }




}

