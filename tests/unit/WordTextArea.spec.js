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
  it('Deve exibir informações conforme o andamento do processo de contagem de palavras', () => {
    expect(wrapper.vm.info).toContain('Digite um texto para que as palavras sejam contadas')
    wrapper.vm.wordCount = 'teste, teste'
    expect(wrapper.vm.info).toContain('Caracteres 12')
  })
  it('Deve avisar qaundo o limite de caracteres chegar a 250', () => {
    wrapper.vm.wordCount = Array(250).fill('x').join('')
    expect(wrapper.vm.info).toContain('Maximo de caracteres foi atigido')
  })
  it('Deve Limpar a textArea ao clicar no botão limpar', () => {
    wrapper.vm.wordCount = 'teste, teste'
    wrapper.vm.handleCleanWordCount()
    expect(wrapper.vm.wordCount).toBe('')
  })
  it('Deve desabilitar o botão limpar quando não existir texto na textArea', () => {
    expect(wrapper.vm.isFilled).toBe(false)
    wrapper.vm.wordCount = 'teste'
    expect(wrapper.vm.isFilled).toBe(true)
  })
})
