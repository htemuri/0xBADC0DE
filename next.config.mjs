import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true // mandatory, otherwise won't export
    }
    // Optional: Change the output directory `out` -> `dist`
    // distDir: "build"
}
const withNextra = nextra({
    // ... other Nextra config options
    defaultShowCopyCode: true
})

export default withNextra(nextConfig)
