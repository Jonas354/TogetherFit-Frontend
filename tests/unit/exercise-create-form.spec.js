import { mount } from '@vue/test-utils';
import CreateExercise from '@/components/CreateExercise.vue';

describe('Testing CreateExercise.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(CreateExercise);

    // then
    expect(wrapper.find('#offcanvas-create-exercise').classes()).not.toContain('show');
  });
});
