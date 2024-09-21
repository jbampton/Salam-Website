const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "logo.samandehi.ir",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;