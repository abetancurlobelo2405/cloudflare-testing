export const runtime = "edge";

export async function GET(request) {
  return new Response("Desde la api de hello!!!!", {
    status: 200,
  });
}
