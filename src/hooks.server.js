/** @type {import('@sveltejs/kit').Handle} */

import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const handle = async ({event, resolve}) => {

    const access = event.cookies.get('sessionid');

    console.log(access);

    if(!access && event.route.id?.startsWith('/(app)')) {
        throw redirect(302, '/');
    }

    const response = await resolve(event);
    return response;
}