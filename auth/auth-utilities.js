import jwt_decode from 'jwt-decode';

// ai func ta login howar por token localStorage a set korar jonno use kora jabe.
export const authenticate = (token, cb) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(token));
        cb();   // token save korar por kono kaj korar jonno cb use kora hoyce
    }
}

// user Authenticated kina ata janar jonno ai func use korte pari
export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('jwt')) {
        const { exp } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        if ((new Date()).getTime() <= exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('jwt');
            return false;
        }
    } else return false;
}

// user ar info janar jonno ata use korte pari
export const userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const decoded = jwt_decode(jwt);
    return { ...decoded, token: jwt }
}

// signout ar jonno ai func use korte pari
export const singout = cb => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        cb();   // cb use for after signout redirect us in home component or other
    }
}

// login kora thakle amra jeno login page ta r dekhte na pari tai login component a
// ai func ta use korte hobe render ar 1st e
const redirectUser = () => {
    // if (redirect) return <Redirect to={`${userInfo().role}/dashboard`} />
    if (isAuthenticated()) return <Redirect to="/" />
}