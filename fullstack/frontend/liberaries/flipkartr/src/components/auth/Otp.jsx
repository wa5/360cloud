import React from 'react';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../../firebaseSettings/firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
function Otp() {
    function mob() {
        firebase.initializeApp(firebaseConfig);
        const uiConfig = {
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    recaptchaParameters: {
                        type: 'img',
                        size: 'normal',
                        badge: 'bottomleft'
                    },
                    defaultCountry: 'IN'
                }
            ],
            callbacks: {
                signInSuccessWithAuthResult: () => {
                    alert('scess');
                    return true;
                }
            },
            signInSuccessUrl: 'http://localhost:3000/'
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#root', uiConfig);
    }

    return (
        <div>
            <div id="root"></div>

            <button
                onClick={() => {
                    mob();
                }}
            >
                clik me to end otp
            </button>
        </div>
    );
}

export default Otp;
