import { mount } from '@vue/test-utils';
import Exercises from '@/views/Exercises.vue';
import CreateExercise from '@/components/CreateExercise.vue';

describe('Exercises.vue', () => {
  it('should have component', () => {
    // when
    const wrapper = mount(Exercises);

    // then
    const exerciseFrom = wrapper.findComponent(CreateExercise);
    expect(exerciseFrom.exists()).toBeTruthy();
  });
});
