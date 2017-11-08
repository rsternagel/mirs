import Typography from 'typography'

const typography = new Typography({
  headerLineHeight: 1.45
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
