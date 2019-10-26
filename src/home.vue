<template>
  <div id="app">
    <!-- <div class="title">固定资产轨迹</div> -->
    <div class="content-main" v-if="list">
    
      <div class="content-main-wrap"  v-for="item in list" :key="item.gjid">
        <div class="main-left">
          <div class="date">
            <i class="fa fa-calendar"></i>
          </div>
          <div class="time">{{item.inittime | formatDate('yyyy-MM-dd hh:mm:ss')}}</div>
        </div>
        <div class="main-right">
          <div class="contentassignment" style="font-weight: 700;color: #676a6c;">{{item.fcaName}}</div>
          <div class="contentassignment" v-if="item.bce01e">
            <span>登记人:</span>
            {{item.bce01e}}
          </div>
          <div class="contentassignment" v-if="item.bce01a">
            <span>领用人:</span>
            {{item.bce01a}}
          </div>
          <div class="contentassignment" v-if="item.fsName">
            <span>发送人:</span>
            {{item.fsName}}
          </div>
          <div class="contentassignment" v-if="item.jsName">
            <span>接收人:</span>
            {{item.jsName}}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        暂无数据
    </div>
  </div>
</template>

<script>
import { promisestrack } from "@/service/api/ajax";
export default {
  name: "App",
  data() {
    return {
      list: []
    };
  },
  methods: {
    init() {
      promisestrack({ fcc01: "360705897057488897" })
        .then(res => {
          debugger;
          this.list = res;
        })
        .catch(res => {});
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style >
#app {
  width: 100%;
  background: #f9f9f9;
  font-size: 14px;
  color: #000;
}
.content-main-wrap {
  display: flex;
}
.content-main {
  padding: 15px 0px 20px 20px;
  border-width: 1px 0px;
}
.main-left {
  width: 130px;
  padding-bottom: 10px;
}
.main-right {
  border-left: 1px solid #e7eaec;
  border-top: 1px solid #e7eaec;
  padding-top: 10px;
  min-height: 60px;
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
}
.date i {
  padding: 5px;
  width: 30px;
  text-align: center;
  border-top: 1px solid #e7eaec;
  border-bottom: 1px solid #e7eaec;
  border-left: 1px solid #e7eaec;
  background: #f8f8f8;
  color: #676a6c;
}
.date {
  text-align: right;
  margin-bottom: 5px;
}
.time {
  text-align: right;
  padding-right: 15px;
  height: 20px;
  line-height: 20px;
  color: #676a6c;
}
.contentassignment {
  height: 25px;
  line-height: 20px;
  text-align: left;
  padding-right: 5px;
  padding-left: 10px;
  color: #676a6c;
}
</style>
