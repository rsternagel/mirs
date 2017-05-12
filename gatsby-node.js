const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const precache = require('sw-precache')
const fs = require('fs-extra')

// currently there is no markdown content :(
/*
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { upsertPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const topLevelPage = path.resolve('templates/template-topLevelPage.js')
    graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              slug
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
        upsertPage({
          path: edge.node.slug, // required
          component: topLevelPage,
          context: {
            slug: edge.node.slug,
          },
        })
      })

      resolve()
    })
  })
}
*/

// add custom url pathname for blog posts
exports.onNodeCreate = ({ node, boundActionCreators, getNode }) => {
  const { updateNode } = boundActionCreators
  if (node.type === 'File' && typeof node.slug === 'undefined') {
    const parsedFilePath = path.parse(node.relativePath)
    const slug = `/${parsedFilePath.dir}/`
    node.slug = slug
    updateNode(node)
  } else if (
    node.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    node.slug = fileNode.slug
    updateNode(node)
  }
}
