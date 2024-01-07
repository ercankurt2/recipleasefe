import RecipesView from "@/views/RecipesView.vue";
import RecipesCardList from "@/components/RecipesCardList.vue";

describe('Testing RecipesView.vue', ()=>{
  it('should have recipes card list component',() =>{
    //when
    const wrapper = mount(RecipesView)

    //then
    const cardList = wrapper.findComponent(RecipesCardList)
    expect(cardList.exists()).toBeTruthy()
  })

})
