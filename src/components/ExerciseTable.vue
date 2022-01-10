<template>
  <div style="padding-left: 160px; padding-top: 20px;">
    <div class="table-responsive">
    <table class="table">
      <thead>
      <tr>
        <!-- <th scope="col" style="color:whitesmoke">#</th> -->
        <th scope="col" style="color:whitesmoke" class="header1">Name</th>
        <th scope="col" style="color:whitesmoke" class="header2">Category</th>
        <th scope="col" style="color:whitesmoke">Difficulty</th>
        <th scope="col" style="color:whitesmoke">Gear</th>
      </tr>
      </thead>
      <tbody>
      <tr class="col" v-for="exercise in filteredExercises" :key="exercise.id">
        <!--  <th scope="row">{{exercise.id}}</th> -->
        <td class="text1">{{exercise.name}}</td>
        <td>{{exercise.category}}</td>
        <td>{{exercise.difficulty}}</td>
        <td>{{exercise.gear ? 'needed' : 'body weight' }}</td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
  <br>
  <input class="filter" type="text" v-model="search" placeholder="Search Exercise"/>
</template>

<script>
export default {
  name: 'ExerciseTable',
  components: 'CreateExercise',
  data() {
    return {
      exercises: [],
      search: '',
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
  computed: {
    filteredExercises() {
      return this.exercises.filter((exercise) => exercise.name.match(this.search)
        || exercise.category.match(this.search)
        || exercise.difficulty.match(this.search));
    },
  },
};

</script>

<style scoped>
.col {
  color: whitesmoke;
}
.table-responsive{
  max-height: 22.5em;
}
thead {
  position: sticky;
  top: 0;
  background: rgba(30, 30, 30, 0.90);
  z-index: 5;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
