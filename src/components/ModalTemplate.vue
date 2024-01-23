<template>
  <div class="fixed w-full h-full grid grid-cols-12 place-content-center">
    <div
      class="col-start-4 col-end-8 text-center py-12 px-24 bg-white border-3 border-indigo-600 rounded-md shadow-md"
    >
      <p class="text-2xl">{{ modalTitle }}</p>
      <div
        class="grid gap-2 mt-12 py-4 px-2 bg-gray-200 border-2 border-gray-400 rounded-md shadow-md"
      >
        <slot></slot>
      </div>

      <div class="col-start-4 col-end-8 place-content-center gap-12 mt-12 flex">
        <button
          @click="onTakeAction"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          {{ actionButtonText }}
        </button>
        <button
          @click="onCloseModal"
          class="rounded-full bg-gray-400 m-2 px-6 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { modalTitle, actionButtonText } = defineProps([
  "modalTitle",
  "actionButtonText",
]);
const emits = defineEmits();

function onTakeAction() {
  emits("takeAction");
}

function onCloseModal() {
  emits("closeModal");
}
</script>
