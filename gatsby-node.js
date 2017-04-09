const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const precache = require('sw-precache')
const fs = require('fs-extra')

// currently there is no markdown content :(
/*
exports.createPages = ({ args }) => {
  const { graphql } = args

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
        pages.push({
          path: edge.node.slug, // required
          component: topLevelPage,
          context: {
            slug: edge.node.slug,
          },
        })
      })

      resolve(pages)
    })
  })
}
*/

// add custom url pathname for blog posts
exports.modifyAST = ({ args }) => {
  const { ast } = args
  const files = select(ast, 'File')
  files.forEach((file) => {
    if (file.extension !== 'md') {
      return
    }
    const parsedFilePath = path.parse(file.relativePath)
    console.log(parsedFilePath)
    const slug = `/${parsedFilePath.dir}/`
    console.log(slug)
    file.slug = slug
    const markdownNode = select(file, 'MarkdownRemark')[0]
    if (markdownNode) {
      markdownNode.slug = slug
    }
  })
  return files
}
