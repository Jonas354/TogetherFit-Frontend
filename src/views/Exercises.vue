<template>
  <div class="background-image">
  <h1 style="color:whitesmoke;padding-bottom: 15px;">Let's get to work!</h1>
    <CreateExercise></CreateExercise>
    <exercise-table :exercises="this.exercises"></exercise-table>
    <footer id="page-footer">Photo by Brett Jordan on Unsplash</footer>
  </div>
</template>

<script>
import CreateExercise from '@/components/CreateExercise.vue';
import ExerciseTable from '@/components/ExerciseTable.vue';

export default {
  name: 'Exercises',
  components: { ExerciseTable, CreateExercise },
  data() {
    return {
      exercises: [],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.background-image {
  background-image: url("../assets/background_gym2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
#page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 0 5px;
  color: whitesmoke;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
