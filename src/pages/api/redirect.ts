import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.body;
    return new Response(data, { status: 200 });
};

export const prerender = false