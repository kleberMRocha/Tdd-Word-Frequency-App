import Header from '../../src/components/Header.vue'
import { mount } from '@vue/test-utils'

let wrapper

describe('Header.vue', () => {
  beforeEach(() => { wrapper = mount(Header) })
  it('Deve renderizar o componenete Header', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('Deve renderizar os links com as telas da funcionalidade do App', () => {
    expect(wrapper.html()).toContain('Home')
    expect(wrapper.html()).toContain('Ranking')
    expect(wrapper.html()).toContain('Word Frequency Counter')
  })
})
