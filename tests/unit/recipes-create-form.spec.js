import { mount } from '@vue/test-utils'
import RecipesCreateForm from "@/components/RecipesCreateForm.vue";

describe('Testing RecipesCreateForm.vue', () => {
  it('should not show form by default', () => {
    //when
    const wrapper = mount(RecipesCreateForm)

    //then
    expect(wrapper.find('#recipes-create-offcanvas').classes()).not.toContain('show')
  });
})
