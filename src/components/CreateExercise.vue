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
      <form class="text-start needs-validation">
        <div class="mb-3">
          <label for="exerciseName" class="form-label">Exercise Name</label>
          <input id="exerciseName" class="form-control"
                 type="text" v-model="name" required/>
        </div>
        <div class="mb-3">
          <label for="exerciseCategory" class="form-label">Category</label>
          <select id="exerciseCategory" class="form-select" v-model="category" required>
            <option value="" selected disabled></option>
            <option value="upper body">upper body</option>
            <option value="arms">arms</option>
            <option value="core">core</option>
            <option value="legs">legs</option>
          </select>
          <!--<input id="exerciseCategory" class="form-control"//-->
          <!--  type="text" v-model="category" required/>//-->
        </div>
   <div class="mb-3">
     <label for="exerciseDifficulty" class="form-label">Difficulty</label>
     <!--<input id="exerciseDifficulty" class="form-control"-->
     <!--type="text" v-model="difficulty" required/>-->
     <select id="exerciseDifficulty" class="form-select" v-model="difficulty" required>
       <option value="" selected disabled></option>
       <option value="low">low</option>
       <option value="medium">medium</option>
       <option value="hard">hard</option>
     </select>
</div>
<div class="mb-3">
<div class="form-check">
<input class="form-check-input" type="checkbox"
       id="exerciseGear" v-model="gear"/>
<label class="form-check-label" for="exerciseGear">
  Gear
</label>
</div>
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
      category: '',
      difficulty: '',
      gear: '',
    };
  },
  methods: {
    createExercise() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/exercises`;

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        name: this.name,
        category: this.category,
        difficulty: this.difficulty,
        gear: this.gear,
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
