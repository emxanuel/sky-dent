export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const object: any = {};
    for (const [key, value] of data.entries()) {
        object[key] = value;
    }

    console.log(object);
    return new Response(JSON.stringify(object), { status: 200 });
};
