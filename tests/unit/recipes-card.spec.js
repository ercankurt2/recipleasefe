import { mount } from '@vue/test-utils'
import RecipesCard from "@/components/RecipesCard.vue";

describe('Testing RecipesCard.vue', () => {
  it('should render titel and beschreibung', () => {
    //when
    const testRecipe = {
      id: 1,
      titel: "Kartoffelsalat",
      beschreibung: "Lorem ipsum"
    };
    const wrapper = mount(RecipesCard,{
      propsData: {
        recipe: testRecipe
      }
      });

    //then
    const cardtitel = wrapper.find('.card-titel')
    const cardText = wrapper.find('.card-text');

    expect(cardtitel.text()).toBe(testRecipe.titel);
    expect(cardText.text()).toBe(testRecipe.beschreibung);
  });
})
