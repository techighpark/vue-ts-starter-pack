<template>
  <div class="w-full mx-auto pb-40">
    <!-- <div class="mt-20">
      <h2 class="text-3xl font-bold text-center">Adventure awaits.</h2>
    </div> -->
    <div
      class="w-full h-10 grid grid-cols-6 gap-x-4 overflow-hidden p-1 bg-gray-100"
    >
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
      <div class="flex items-center justify-center">
        <input
          type="radio"
          class="machine-radio hidden"
          id="legs"
          value="machines"
        />
        <label for="legs" value="machines">Legs</label>
      </div>
    </div>
    <div class="max-w-3xl grid grid-cols-3 mt-10 mx-auto gap-x-8 gap-y-28">
      <template v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]">
        <div class="group/item flex flex-col gap-y-6">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516919549054-e08258825f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
              class="group-hover/item:scale-110 transition-transform duration-300"
            />
            <!-- <div
              class="absolute bottom-0 left-0 group-hover/item:bottom-1/2 group-hover/item:left-1/2 group-hover/item:-translate-x-1/2 group-hover/item:-translate-y-1/2 transition-all duration-700"
            >
              <h5
                class="strokeme h-fit group-hover/item:w-full group-hover/item:py-2 group-hover/item:px-4 group-hover/item:scale-150 origin-center bg-white/30 font-bold transition-all ease-out duration-1000"
              >
                MachineA
              </h5>
            </div> -->
          </div>
          <hr />
          <div class="flex flex-col items-center">
            <h5 class="font-bold">Apple Watch Series 8</h5>
            <div
              class="flex flex-col items-center gap-y-2 text-xs text-center mx-4"
            >
              <p class="">45mm or 41mm</p>
              <p class="">High and low heart rate notifications</p>
              <p class="">
                Cycle tracking with retrospective ovulation estimates6
              </p>
              <p class="">45mm or 41mm</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
/* .strokeme { color: white; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,
-1px 1px 0 #000, 1px 1px 0 #000; } .grid-item:hover .strokeme { color: black;
text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
} */
</script>

<style scoped>
label[for="machines"] {
  font-size: 0.2rem;
  background-color: black;
}
</style>
