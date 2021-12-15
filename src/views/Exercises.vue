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
      exercises: [
        {
          id: 1,
          name: 'curls',
        },
        {
          id: 2,
          name: 'situps',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
