<template>
  <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <!-- <h3 class="small">{{ item }}</h3> -->
          <div  :class="item">{{item}}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "SlideShow",
  data(){
    return{
      img:[
        'box__img1',
        'box__img2',
        'box__img3',
        'box__img4'
      ]
    }
  }
};
</script>

<style>

.block{
  width: 500px;
  height: 400px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.box{
  display: flex;
  width: 2000px;
  height: 400px;
}

.box__img1 {
  width: 500px;
  height: 400px;
  background: -webkit-linear-gradient(
    left,
    rgb(50, 216, 152),
    rgb(90, 73, 192)
  );
  display: inline-block;
}

.box__img2 {
  width: 500px;
  height: 400px;
  background: -webkit-linear-gradient(
    top right,
    rgb(247, 0, 255),
    rgb(25, 0, 247),
    rgb(0, 255, 179),
    rgb(136, 255, 0)
  );
}

.box__img3 {
  width: 500px;
  height: 400px;
  background: radial-gradient(
    circle at center,
    rgb(0, 140, 255),
    rgb(255, 0, 149)
  );
}

.box__img4 {
  width: 500px;
  height: 400px;
  background: radial-gradient(
    circle at top,
    rgb(0, 255, 170),
    rgb(162, 0, 255)
  );
}
</style>