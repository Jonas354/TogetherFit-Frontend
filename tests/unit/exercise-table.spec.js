import { mount } from '@vue/test-utils';
import ExerciseTable from '@/components/ExerciseTable.vue';

describe('Testing ExerciseTable.vue', () => {
  it('should have correct header first column', () => {
    // when
    const wrapper = mount(ExerciseTable, {
    });

    // then
    const exerciseTable = wrapper.find('.header1');
    expect(exerciseTable.text()).toContain('Name');
  });
  it('should have correct header second column', () => {
    // when
    const wrapper = mount(ExerciseTable, {
    });

    // then
    const exerciseTable2 = wrapper.find('.header2');
    expect(exerciseTable2.text()).toContain('Category');
  });
});
