import TableInfos from '../../src/components/TableInfos.vue'
import { mount } from '@vue/test-utils'

let wrapper

describe('TableInfos.vue', () => {
  beforeEach(() => { wrapper = mount(TableInfos) })

  it('Deve randerizar o compoenente', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('A Tabela Deve Conter um titulo', () => {
    expect(wrapper.find('.table-info').text()).toContain('Resultado da Contagem')
  })
})
