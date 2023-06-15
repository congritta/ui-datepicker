const esbuild = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')

console.clear()

const developmentMode = process.env.NODE_ENV === 'development'

const buildConfig = {
  entryPoints: ['./src/index.tsx', './src/index.module.css'],
  outdir: './dist',
  minify: !developmentMode,
  plugins: [
    cssModulesPlugin({
      localsConvention: 'camelCase'
    })
  ]
}

// Development server
if(developmentMode) {
  let buildContext
  esbuild.context(buildConfig)
    .then((_buildContext) => {

      buildContext = _buildContext

      return buildContext.watch()
    })
    .then(() => {
      console.log(`✅ Watching ./src directory for changes...`)
      return;
    })
    .catch(() => {})
}

// Production build
else {
  console.log('⌛ Building....')

  esbuild.build(buildConfig).then((buildResults) => {

    if(buildResults.errors.length) {
      for(const error of buildResults.errors) {
        console.error(error)
      }
    }

    else if(buildResults.warnings.length) {
      for(const warning of buildResults.warnings) {
        console.warn(warning)
      }
    }

    else {
      console.log('✅ Project is successfully built')
    }
  })
}
