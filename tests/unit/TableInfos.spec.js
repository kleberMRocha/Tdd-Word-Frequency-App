import TableInfos from '../../src/components/TableInfos.vue'
import { mount } from '@vue/test-utils'

let wrapper

describe('TableInfos.vue', () => {
  beforeEach(() => {
    wrapper = mount(TableInfos,
      {
        propsData: {
          infos: [
            { title: 'Isso', value: 1 },
            { title: 'é', value: 1 },
            { title: 'um', value: 1 },
            { title: 'teste', value: 2 }
          ]
        }
      })
  })

  it('Deve randerizar o compoenente', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('A Tabela Deve Conter um titulo', () => {
    expect(wrapper.find('.table-info').text()).toContain('Resultado da Contagem')
  })

  it('Deve renderizar o resultado da contagem de palavras', () => {
    expect(wrapper.findAll('[data-test="table"]')).toBeTruthy()
    expect(wrapper.findAll('[data-test="table"]')).toHaveLength(4)
    expect(wrapper.findAll('[data-test="table"]').at(0).html()).toContain('Isso')
    expect(wrapper.findAll('[data-test="table"]').at(1).html()).toContain('é')
    expect(wrapper.findAll('[data-test="table"]').at(2).html()).toContain('um')
    expect(wrapper.findAll('[data-test="table"]').at(3).html()).toContain('teste')
  })

  it('O botão de salvar as inforamções no ranking não deve ser exibida caso não exista inforamções na tabela', async () => {
    wrapper = mount(TableInfos)
    expect(wrapper.vm.hasInfos).toBeFalsy()
    await wrapper.setProps({
      infos: [
        { title: 'Isso', value: 1 },
        { title: 'é', value: 1 },
        { title: 'um', value: 1 },
        { title: 'teste', value: 2 }
      ]
    })
    expect(wrapper.vm.hasInfos).toBeTruthy()
  })

  it('Deve salvar as informações no localstorage quando o botão "Savlar informações para o ranking" for clickado', async () => {
    const saveRanking = jest.spyOn(wrapper.vm, 'saveRanking')
    await wrapper.find('button').trigger('click')
    expect(saveRanking).toHaveBeenCalled()
  })
})
