exports.onCreateNode = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "https://slim-media.netlify.com/*",
    toPath: "https://www.slim-media.com/:splat",
    isPermanent: true,
  })
}
