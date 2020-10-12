<template>
  <div class="card">
    <div class="flip-style front">
      <h1>Hello</h1>
    </div>
    <div class="flip-style back">
      <h1>Goodbye</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flipcard",
};
</script>
    
<style>
.card {
  margin: 20px;
  /* background-color: #0871b0; */
  width: 200px;
  height: 200px;
  line-height: 200px;
  color: #fff;
  position: relative;
}

.flip-style {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
}

.front {
  transform: rotateY(180deg);
  background-color: #45bb6c;
}

.back {
  transform: rotateY(0deg);
  background-color: #08b0a2;
}

.card:hover .back {
  transform: rotateY(180deg);
  transition: 2s;
}

.card:hover .front {
  transform: rotateY(360deg);
  transition: 2s;
}
</style>