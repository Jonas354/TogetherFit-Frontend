<template>
  <h1>Welcome to Exercises!</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
    </thead>
    <tbody>
    <tr class="col" v-for="exercise in exercises" :key="exercise.id">
        <th scope="row">{{exercise.id}}</th>
        <td>{{exercise.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Exercises',
  data() {
    return {
      exercises: [],
    };
  },
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://togetherfit.herokuapp.com/exercises', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(exercise => {
        this.exercises.push(exercise);
      }))
      .catch(error => console.log('error', error));
  },
};
</script>

<style scoped>

</style>
