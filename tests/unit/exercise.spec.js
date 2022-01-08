import { mount } from '@vue/test-utils';
import Exercises from '@/views/Exercises.vue';
import CreateExercise from '@/components/CreateExercise.vue';
import ExerciseTable from '@/components/ExerciseTable.vue';

describe('Exercises.vue', () => {
  it('should have component CreateExercise component', () => {
    // when
    const wrapper = mount(Exercises);

    // then
    const exerciseFrom = wrapper.findComponent(CreateExercise);
    expect(exerciseFrom.exists()).toBeTruthy();
  });
  it('should have ExerciseTable component', () => {
    // when
    const wrapper = mount(Exercises);

    // then
    const exerciseTable = wrapper.findComponent(ExerciseTable);
    expect(exerciseTable.exists()).toBeTruthy();
  });
});
