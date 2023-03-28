/** @type {import('@sveltejs/kit').Handle} */

import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const handle = async ({event, resolve}) => {

    const accessSession = event.cookies.get('sessionid');
    const accessJWT = event.cookies.get('jwt');

    console.log("Cookie Session : ", accessSession);
    console.log("Cookie JWT : ", accessJWT);
    let access = await checkAccess(event, accessSession, accessJWT);
    console.log(access);

    if(!access && event.route.id?.startsWith('/(app)')) {
        throw redirect(302, '/');
    }

    const response = await resolve(event);
    return response;
}

// @ts-ignore
async function checkAccess(event, sessionCookie, jwtCookie){
    let access = false;
    if(isNullOrEmpty(sessionCookie) && isNullOrEmpty(jwtCookie)){
        access =  false;
    }
    if(!isNullOrEmpty(sessionCookie)){
        try{
            const response = await fetch('http://127.0.0.1:8000/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        console.log("Session Response:", response.status)
        if(response.status === 200){
            access = true;
        }
        } catch(e) {
            console.log("message", e);
        }
    }
    else if(!isNullOrEmpty(jwtCookie)){
        try {
            const response = await fetch('http://127.0.0.1:8000/authorize/user', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `${jwtCookie}`
                }
            });
            console.log("Status:", response.status);
            if (response.status === 200){
                access = true;
            }
            else if (response.status === 401) {
                const refreshToken = event.cookies.get('refresh_token');
                console.log("RefreshToken: ",refreshToken);
                if (refreshToken) {
                    const refreshResponse = await fetch('http://127.0.0.1:8000/authorize/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: 'include'
                        });

                    if (refreshResponse.status === 200) {
                        const { access_token } = await refreshResponse.json();
                        event.cookies.set('jwt', access_token);
                        access = true;
                    }
                }
            }
        }
        catch (e) {
            console.log("message", e);
        }
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