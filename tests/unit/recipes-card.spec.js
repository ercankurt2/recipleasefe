import { mount } from '@vue/test-utils'
import RecipesCard from "@/components/RecipesCard.vue";

describe('Testing RecipesCard.vue', () => {
  it('should render title and beschreibung', () => {
    //when
    const testRecipe = {
      id: 1,
      title: "Kartoffelsalat",
      beschreibung: "Lorem ipsum"
    };
    const wrapper = mount(RecipesCard,{
      propsData: {
        recipe: testRecipe
      }
      });

    //then
    const cardTitle = wrapper.find('.card-title')
    const cardText = wrapper.find('.card-text');

    expect(cardTitle.text()).toBe(testRecipe.title);
    expect(cardText.text()).toBe(testRecipe.beschreibung);
  });
})
