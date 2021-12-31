<template>
  <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas"
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
      <form class="text-start needs-validation" novalidate>
        <div class="mb-3">
          <label for="exerciseName" class="form-label">Exercise Name</label>
          <input id="exerciseName" class="form-control"
                 type="text" v-model="name" required>
        </div>
        <button type="submit" class="btn btn-dark btn-primary"
                @click="createExercise">Create</button>
        <button class="btn btn-warning" type="reset">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateExercise',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    createExercise() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/exercises`;

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        name: this.name,
      });

      const requestOptions = {
        method: 'POST',
        headers,
        body: payload,
        redirect: 'follow',
      };

      fetch(endpoint, requestOptions)
        .catch((error) => console.log('error', error));
    },
  },
};

</script>

<style scoped>

</style>
