import RecipesCard from "@/components/RecipesCard.vue";

describe('Testing RecipesCard.vue', () => {
  it('should render title and beschreibung', () => {
    //when
    const testRecipe = {
      id: 1,
      title: "Kartoffelsalat",
      beschreibung: "Lorem ipsum"
    }
    const wrapper = mount(RecipesCard,{
      propsData:{
        recipe: testRecipe
      }
      })

    //then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe(`${testRecipe.title} ${testRecipe.beschreibung}`)
  });
})
