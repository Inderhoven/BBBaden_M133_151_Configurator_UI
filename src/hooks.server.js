/** @type {import('@sveltejs/kit').Handle} */

import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const handle = async ({event, resolve}) => {

    const accessSession = event.cookies.get('sessionid');
    const accessJWT = event.cookies.get('jwt');

    console.log("Cookie Session : ", accessSession);
    console.log("Cookie JWT : ", accessJWT);
    let access = await checkAccess(accessSession, accessJWT);
    console.log(access);

    if(!access && event.route.id?.startsWith('/(app)')) {
        throw redirect(302, '/');
    }

    const response = await resolve(event);
    return response;
}

// @ts-ignore
async function checkAccess(sessionCookie, jwtCookie){
    let access;
    if(isNullOrEmpty(sessionCookie) && isNullOrEmpty(jwtCookie)){
        access =  false;
    }
    // if(!isNullOrEmpty(sessionCookie)){
    //     try{
    //         access = await fetch('http://localhost:8000/api/user', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json' },
    //         credentials: 'include'
    //     });
    //     } catch(e) {
    //         console.log("message", e);
    //     }
    // }
    // else if(!isNullOrEmpty(jwtCookie)){
    //     try {
    //         access = await fetch('http://localhost:8000/authorize/user', {
    //             method: 'POST',
    //             headers: {
    //                 Authentication: jwtCookie
    //             }
    //         });
    //         console.log("access:", access);
    //     }
    //     catch (e) {
    //         console.log("message", e);
    //     }
    // }
    else{
        access = true;
    }

    return access;
    
}

// @ts-ignore
function isNullOrEmpty(cookie){
    if(!cookie || cookie.trim() === ''){
        return true;
    }
    return false;
}