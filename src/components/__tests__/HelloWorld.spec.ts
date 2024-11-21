import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import YourComponent from '../../views/ApplyPage.vue'

describe('ApplyPage', () => {
  it('renders form with inputs and products', () => {
    const wrapper = mount(YourComponent)

    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="surname"]').exists()).toBe(true)
    expect(wrapper.find('textarea[name="question"]').exists()).toBe(true)

    expect(wrapper.findAll('.product-card').length).toBeGreaterThan(0)  })

  it('shows an error notification when form is submitted with empty fields', async () => {
    const wrapper = mount(YourComponent)
    const notyf = vi.spyOn(Notyf.prototype, 'error')

    await wrapper.find('form').trigger('submit.prevent')

    expect(notyf).toHaveBeenCalledWith('Пожалуйста, заполните все поля!')
  })

  it('submits the form and shows a success notification', async () => {
    const wrapper = mount(YourComponent)
    const notyf = vi.spyOn(Notyf.prototype, 'success')


    await wrapper.find('input[name="name"]').setValue('John')
    await wrapper.find('input[name="surname"]').setValue('Doe')
    await wrapper.find('textarea[name="question"]').setValue('What is Vue?')


    await wrapper.find('form').trigger('submit.prevent')

    expect(notyf).toHaveBeenCalledWith('Заявка успешно создана!')
  })

  it('redirects to the profile page after form submission', async () => {
    const wrapper = mount(YourComponent)
    const spy = vi.spyOn(window, 'setTimeout')


    await wrapper.find('input[name="name"]').setValue('John')
    await wrapper.find('input[name="surname"]').setValue('Doe')
    await wrapper.find('textarea[name="question"]').setValue('What is Vue?')


    await wrapper.find('form').trigger('submit.prevent')

    
    expect(spy).toHaveBeenCalledWith(expect.any(Function), 2000)
  })
})
