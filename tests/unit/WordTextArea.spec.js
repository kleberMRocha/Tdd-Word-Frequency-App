import WordTextArea from '../../src/components/WordTextArea.vue'
import { mount } from '@vue/test-utils'

let wrapper

beforeEach(() => { wrapper = mount(WordTextArea) })

describe('WordTextArea.vue', () => {
  it('Deve renderizar o componenete HeadWordTextAreaer', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('Deve Conter 2 botoẽs e um textarea', () => {
    const btns = wrapper.findAll('button')
    const textArea = wrapper.find('textarea')

    expect(btns.length).toBe(2)
    expect(textArea).toBeTruthy()

    expect(btns.at(0).text()).toBe('Salvar')
    expect(btns.at(1).text()).toBe('Limpar')
  })
  it('deve exibir informações conforme o andamento do processo de contagem de palavras', () => {
    const info = wrapper.find('.info')
    expect(info).toBeTruthy()
    expect(info.text()).toContain('Digite um texto para que as palavras sejam contadas')
    wrapper.vm.wordCount = 'teste, teste'
    expect(info.text()).toContain('')

    const maxLength = Array(250).fill('x').join('')
    wrapper.vm.wordCount = maxLength

    wrapper.vm.$nextTick(() => {
      expect(info.text()).toContain('Maximo de caracteres foi atigido')
    })

  })
  it('Deve Limpar a textArea ao clicar no botão limpar', () => {
    wrapper.vm.wordCount = 'teste, teste'
    const btn = wrapper.find('[data-test-limpar]')
    btn.trigger('click')
    expect(wrapper.vm.wordCount).toBe('')
  })
  it('Deve desabilitar o botão limpar quando não existir texto na textArea', () => {
    expect(wrapper.vm.wordCount).toBe('')
    const btn = wrapper.find('[data-test-limpar]')
    expect(btn.attributes().disabled).toBeTruthy()
  })
})
