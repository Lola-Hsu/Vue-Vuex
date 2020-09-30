<template>
  <div>
    <ul>
      <li :key="item.id" v-for="(item, index) in list">
        index: {{ index }}, name: {{ item.name }}
      </li>
    </ul>
    <hr />
    <ul>
      <li :key="index" v-for="(item, key, index) in list2">
        index: {{ index }}, key:{{ key }}, name:{{ item.name }}
      </li>
    </ul>
    <hr />
    <div>
      <span :key="n" v-for="n in 10">{{ n }}</span>
    </div>
    <hr />
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        {{ index }}
        <input type="text" name="" id="" :placeholder="item.name" />
      </li>
    </ul>
    <hr>
    <div>
      <ul v-for="item in list3" :key="item.index">
        {{'item:' + item}}
        <li v-for="value in item" :key="value.index">
          {{'value:' + value}}
        </li>
      </ul>
    </div>
    <hr>
    <!-- <div v-for=" i in 9" :key="i">
      <div v-for=" j in 9" :key="j">
        {{i}} * {{j}} = {{i*j}}
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Fortest",
  data() {
    return {
      list: [
        {
          id: "123456789",
          name: "選項1",
        },
        {
          id: "234567890",
          name: "選項2",
        },
        {
          id: "345678901",
          name: "選項3",
        },
      ],
      list2: {
        123456789: {
          name: "選項1",
        },
        234567890: {
          name: "選項2",
        },
        345678901: {
          name: "選項3",
        },
      },
    };
  },
  props:{
    list3: Array
  }
};
</script>

<style>

li{
  list-style: none;
}
</style>