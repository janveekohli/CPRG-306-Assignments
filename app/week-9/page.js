"use client"


// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Page from "./shopping-list/page";
 

export default  function page() {
    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();


    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <main>
            <h1>Week 9 assignment</h1>
            <div>
                {user ? 
                (
                    <div>
                        <p>Welcome, {user.displayName}</p>

                        <Page></Page>
                        <button onClick = {logout}> Logout </button>
                    </div>
                ) : (
                    <button onClick = {login}>Login with GitHub</button>
                )}
            </div>
        </main>
    );
}