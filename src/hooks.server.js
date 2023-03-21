/** @type {import('@sveltejs/kit').Handle} */

import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const handle = async ({event, resolve}) => {

    const accessSession = event.cookies.get('sessionid');
    const accessJWT = event.cookies.get('jwt');
    if((!accessSession || !accessJWT) && event.route.id?.startsWith('/(app)')) {
        throw redirect(302, '/');
    }

    const response = await resolve(event);
    return response;
}