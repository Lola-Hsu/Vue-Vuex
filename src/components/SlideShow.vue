<template>
  <div>
    <div class="box">
      <div class="box__img1"></div>
      <div class="box__img2"></div>
      <div class="box__img3"></div>
      <div class="box__img4"></div>
      <i class="fas fa-angle-left"></i>
      <i class="fas fa-angle-right"></i>
      <div class="box__lis">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
    <!-- <img src="../../public/img1.jpeg" alt="" /> -->
    <!-- <img src="../../public/img2.jpeg" alt="" /> -->
    <!-- <img src="../../public/img3.jpeg" alt="" /> -->
  </div>
</template>

<script>
export default {
  name: "SlideShow",
};
</script>

<style>
.fa-angle-left {
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 2%;
  opacity: 0.5;
}

.fa-angle-left:hover {
  opacity: 1;
}

.fa-angle-right {
  font-size: 40px;
  position: absolute;
  top: 50%;
  right: 2%;
  opacity: 0.5;
}

.fa-angle-right:hover {
  opacity: 1;
}

.box {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  display: flex;
}

.box__img1 {
  width: 500px;
  height: 400px;
  background: -webkit-linear-gradient(
    left,
    rgb(50, 216, 152),
    rgb(90, 73, 192)
  );
  flex-grow: 1;
}

.box__img2 {
  width: 500px;
  height: 400px;
  background: -webkit-linear-gradient(
    top right,
    rgb(247, 0, 255),rgb(25, 0, 247), rgb(0, 255, 179),rgb(136, 255, 0)
  );
}

.box__img3 {
  width: 500px;
  height: 400px;
  background:radial-gradient(circle at center,rgb(0, 140, 255),rgb(255, 0, 149));
}

.box__img4 {
  width: 500px;
  height: 400px;
  background:radial-gradient(circle at top,rgb(0, 255, 170),rgb(162, 0, 255));
}

.box__lis {
  display: flex;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}

.box__lis li {
  margin: 0 10px;
  width: 10px;
  height: 10px;
  list-style: none;
  background: rgb(0, 0, 0);
  border-radius: 50%;
}
</style>