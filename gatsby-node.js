const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async (
  { actions: { createNode }, node, createContentDigest, store, cache }, configOptions
) => {

    const fileNode = await createRemoteFileNode({
      url: configOptions.url,
      store,
      cache,
      createNode,
      createNodeId: createContentDigest,
      ext: '.json'
    })

    if (fileNode) {
      node.localFile___NODE = fileNode.id
    }
  
}