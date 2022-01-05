<template>
  <div class="background-image">
    <div style="padding-left: 700px;">
      <div class="blockquote"> <br> <br>
        <p>Some people want it to happen, <br>
          some wish it would happen, <br>
          and others make it happen.<br> </p>
      </div>
      <div class="text-center">
        <p> <i>Michael Jordan</i></p>
      </div>
      <div class="text-center text-black">
        <p> <br> <b>TogetherFit</b> will help you make it happen.<br>
        Find new exercises to never have<br>
        a dull session again or contribute<br>
        your favorite exercise. <b>#FitCommunity</b> <br> <br>
        <i>Made together by Jonas & Martin</i></p>
      </div>
    </div>
    <footer id="page-footer">Photo by Jeremy Bishop on Unsplash</footer>
  </div>
</template>

<script></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.background-image {
  background-image: url("../assets/background_about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.blockquote{
  font-size:1.9em;
  color: black;
}
.text-center{
  font-size:1.6em;
  color: black;
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
