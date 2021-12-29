<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop">Contribute your favorite exercise
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1"
       id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Your favourite exercise</h5>
      <button type="button" class="btn-close text-reset"
              data-bs-dismiss="offcanvas" aria-label="Close">
      </button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div class="mb-3">
          <label for="exerciseName" class="form-label">Exercise Name</label>
          <input type="text" class="form-control" id="exerciseName" v-model="exerciseName">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
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
