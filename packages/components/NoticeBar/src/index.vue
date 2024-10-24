<template>
  <div :class="['notification-container flex-start px-16 fs-14']">
    <div class="box flex-1 mr-8 h-100 d-flex">
      <div
        :class="['content flex-start h-100 pr-50', needRoll && 'roll']"
        :style="{ animationDuration: duration + 's' }"
      >
        {{ value }}
      </div>
      <!-- 再添加一个重复元素，为了动画过渡更平滑 -->
      <div
        v-if="needRoll"
        class="content flex-start h-100 pr-50 roll"
        :style="{ animationDuration: duration + 's' }"
      >
        {{ value }}
      </div>
    </div>
    <i class="el-icon-arrow-up cursor-pointer"></i>
  </div>
</template>

<script>
export default {
  name: "ggb-notice-bar",
  props: {
    value: {
      type: [Number, String],
      default: "",
    },
  },
  data() {
    return {
      needRoll: false,
      duration: 0,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (!newVal) return;
        this.$nextTick(() => {
          const box = document.querySelector(".box");
          const dom = document.querySelector(".content");
          this.duration = 0;
          this.needRoll = box.clientWidth < dom.clientWidth;
          if (this.needRoll) {
            // 计算时间
            this.duration = (newVal.length / 100) * 20;
          }
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.notification-container {
  width: 100%;
  height: 36px;
  background: #fff4e8;
  color: #fa8c16;
  transition: all 0.3s ease;
}
.closeStyle {
  height: 6px;
  background: #fa8c16;
  cursor: pointer;
}
.box {
  overflow: hidden;
  .content {
    white-space: nowrap;
    width: fit-content;
  }
}
.roll {
  animation-name: roll;
  animation-timing-function: linear;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes roll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
