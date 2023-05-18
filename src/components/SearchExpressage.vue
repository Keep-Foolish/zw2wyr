<template>
  <view>
    <n-card class="mainbody" :bordered="false" title="快递单号查询">
      <view class="container">
        <input class="input" focus placeholder="请输入快递单号" type="textf" v-model="expressage_number" />
        <n-button class="search" color="#ff69b4" @click="getInformation(expressage_number)">查询</n-button>
      </view>
      <view class="detial">
        <n-timeline>
          <n-timeline-item type="success" v-for="(item, index) in information" :key="index" :content="item.status"
            :time="item.time" />
        </n-timeline>
      </view>
    </n-card>
  </view>
</template>

<script>
import { getdata } from '../controller/axios'
export default {
  data() {
    return {
      expressage_number: 0,
      count: 0,
      information: []
    }
  },
  methods: {
    async getInformation(param) {
      const response = await getdata(param)
      console.log(response.data.result.list)
      this.information = response.data.result.list
    }
  }
}
</script>

<style>
.mainbody {
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  display: inline;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 45px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border: 3px lightslategray solid;
  width: 190px;
  height: 34px;
}

.detial {
  display: flex;
  width: 200px;
}

.search {
  margin-bottom: 45px;
}
</style>
