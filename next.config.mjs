/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      reactCompiler: true,
   },
   bundlePagesRouterDependencies: true,
   serverExternalPackages: ['tailwindcss-animated'],
}

export default nextConfig
