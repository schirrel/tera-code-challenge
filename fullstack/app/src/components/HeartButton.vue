<template>
  <button class="btn-heart" @click="like" :class="{'text-red': liked  }">
    <v-icon>mdi-heart{{ book.liked ? "" : "-outline" }}</v-icon>
    <i class="fa-heart" :class="{ far: !liked, fas: liked}"></i>
  </button>
</template>

<script>
export default {
  name: "HeartButton",
  props: ["book", "liked"],
  methods: {
    like() {
      this.$emit("click", this.book);
    },
  },
};
</script>

<style>
.btn-heart {
  --size: 30px;
  width: var(--size) !important;
  height: var(--size) !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;
  min-width: 0 !important;
  margin: 0 !important;
  position: absolute;
  bottom: 20px;
  right: 20px;
  appearance: none;
  outline: none;

  z-index: 88;
}
i {
  color: #222;
}
.text-red ,
.text-red i {
  color: #c00 !important
}
</style>