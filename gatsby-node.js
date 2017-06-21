// const _ = require('lodash')
// const Promise = require('bluebird')
// const path = require('path')
// const select = require('unist-util-select')
// const precache = require('sw-precache')
// const fs = require('fs-extra')

// currently there is no markdown content :(
/*
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const topLevelPage = path.resolve('templates/topLevelPage.js')
    graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // create top level pages.
      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        createPage({
          path: edge.node.fields.slug, // required
          component: topLevelPage,
          context: {
            slug: edge.nodefields.slug,
          },
        })
      })

      resolve()
    })
  })
}
*/

// add custom url pathname for blog posts
/*
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'File' && typeof node.slug === 'undefined') {
    const parsedFilePath = path.parse(node.relativePath)
    const slug = `/${parsedFilePath.dir}/`
    createNodeField({ node, fieldName: `slug`, fieldValue: slug })
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      fieldName: `slug`,
      fieldValue: fileNode.fields.slug,
    })
  }
}
*/
