<template>
  <div class="background-image">
  <h1 style="color:whitesmoke;padding-bottom: 15px;">Let us get to work!</h1>
    <CreateExercise></CreateExercise>
    <div style="padding-left: 130px; padding-top: 20px;">
    <table class="table">
    <thead>
    <tr>
     <!-- <th scope="col" style="color:whitesmoke">#</th> -->
      <th scope="col" style="color:whitesmoke">Name</th>
      <th scope="col" style="color:whitesmoke">Category</th>
      <th scope="col" style="color:whitesmoke">Difficulty</th>
      <th scope="col" style="color:whitesmoke">Gear</th>
    </tr>
    </thead>
    <tbody>
    <tr class="col" v-for="exercise in exercises" :key="exercise.id">
      <!--  <th scope="row">{{exercise.id}}</th> -->
        <td>{{exercise.name}}</td>
        <td>{{exercise.category}}</td>
        <td>{{exercise.difficulty}}</td>
        <td>{{exercise.gear}}</td>
    </tr>
    </tbody>
  </table>
    </div>
    <footer id="page-footer">Photo by Brett Jordan on Unsplash</footer>
</div>
</template>

<script>
import CreateExercise from '@/components/CreateExercise.vue';

export default {
  name: 'Exercises',
  components: { CreateExercise },
  data() {
    return {
      exercises: [],
    };
  },
  mounted() {
    const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/exercises`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(endpoint, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        result.forEach((exercise) => {
          console.log(exercise);
          this.exercises.push(exercise);
        });
      })
      .catch((error) => console.log('error', error));
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
.col {
  color: whitesmoke;
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
