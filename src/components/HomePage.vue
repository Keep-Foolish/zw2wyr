<template>
  <html>
  <div class="container">
    <!-- <n-button color="#ff69b4" size="large" class="jump">#ff6911</n-button> -->
    <n-grid class="grid" :x-gap="1" :y-gap="12" :cols="6" layout-shift-disabled responsive="screen" item-responsive="true" >
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/1.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/2.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/12.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/13.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/3.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/4.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/5.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/6.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/7.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/8.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/9.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/10.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/11.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/14.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/15.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/16.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/17.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/18.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/19.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/20.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/21.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/22.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/23.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/24.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/25.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/26.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/27.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/28.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/29.jpg" />
      </n-gi>
      <n-gi class="n-gi">
        <img class="image" src="../../public/homepage_element/30.jpg" />
      </n-gi>
    </n-grid>
  </div>

  </html>
</template>

<script>
export default {
  data() {
    return {
      expressage_number: 0,
      count: 0,
      information: []
    }
  },
}
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  background-color: #56cda7;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* .jump {
  position: absolute;
  right: 100px;
} */
.image{
  width: 70%;
}

.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image:hover{
  border: 5px solid #8475d7;
  width: 100%;
}

// .image:hover + .image{
//   width: 10px;
// }
</style>