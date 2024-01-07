import { mount } from '@vue/test-utils'
import RecipesView from "@/views/RecipesView.vue";
import RecipesCardList from "@/components/RecipesCardList.vue";
import RecipesCreateForm from "@/components/RecipesCreateForm.vue";

describe('Testing RecipesView.vue', ()=>{
  it('should have recipes card list component',() =>{
    //when
    const wrapper = mount(RecipesView)

    //then
    const cardList = wrapper.findComponent(RecipesCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have recipes create form component', () => {
    //when
    const wrapper = mount(RecipesView)

    //then
    const createForm = wrapper.findComponent(RecipesCreateForm)
    expect(createForm.exists()).toBeTruthy()
  });

})
