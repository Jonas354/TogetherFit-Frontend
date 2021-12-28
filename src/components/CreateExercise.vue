<template>
  <form>
    <div class="mb-3">
      <label for="exerciseName" class="form-label">Exercise Name</label>
      <input type="text" class="form-control" id="exerciseName" v-model="exerciseName">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'CreateExercise',
  data() {
    return {
      exerciseName: '',
    };
  },
};
</script>

<style scoped>

</style>
