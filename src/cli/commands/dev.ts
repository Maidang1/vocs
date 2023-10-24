export async function dev() {
  const { createDevServer } = await import('../../vite/dev-server.js')
  const server = await createDevServer()
  await server.listen()
  server.printUrls()
}
