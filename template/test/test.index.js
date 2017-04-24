import assert from 'chai/chai'
import 'steal-mocha'

// Run all unit tests
import './test.unit'
// Run all e2e tests
import './test.e2e'

// Example of testing the App.vue
import App from '@/App.vue'

describe('feathers-vuex', () => {
  it('is CommonJS compatible', () => {
    assert(typeof feathersVuex === 'function')
  })

  it('basic functionality', () => {
    assert(typeof feathersVuex === 'function', 'It worked')
  })
})
