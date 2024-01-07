import RecipesCardList from "@/components/RecipesCardList.vue";
import RecipesCard from "@/components/RecipesCard.vue";

describe('Testing RecipesCardList.vue', () =>{
  it('should render a recipe card for each recipe', () => {

    //when
    const wrapper = mount(RecipesCardList, {
      propsData: {
        recipes: [
          {
            id: 1,
            title: 'Kartoffelsalat',
            beschreibung: 'lorem ipsum'
          },
          {
            id: 2,
            title: 'Kürbissuppe',
            beschreibung: 'lorem ipsum'
          }
        ]
      }
    })

  //then
  const recipesCards = wrapper.findAllComponents(RecipesCard)
  expect(recipesCards.length).toBe(2)
})

})
