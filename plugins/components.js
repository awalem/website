// Globally register all components inside the components directory `~/components/global` for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
// console.log('Global runs on the server', process.server);
// console.log('Global runs on the client', process.client);

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  // '@/components/',
  '@/components/',
  // Include subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /[\w]+\.vue$/
)
// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the path from the global folder components
        // .replace(/^global\/*$/, '')
        // Remove the "./_" from the beginning
        // .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const resourceComponent = require.context(
  // Look for files in the current directory
  // '@/components/',
  '@/components/library',
  // Include subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /[\w]+\.vue$/
)
// For each matching file name...
resourceComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = resourceComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the path from the global folder components
        // .replace(/^global\/*$/, '')
        // Remove the "./_" from the beginning
        // .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
