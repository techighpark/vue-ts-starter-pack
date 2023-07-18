<template>
  <div class="w-full mx-auto pb-40">
    <!-- <div class="mt-20">
      <h2 class="text-3xl font-bold text-center">Adventure awaits.</h2>
    </div> -->

    <div class="relative w-full">
      <div
        class="absolute left-0 top-3 bottom-3 px-2 bg-gray-100 border-r border-r-gray-300 z-10"
      >
        <div class="h-full flex items-center">
          <ChevronLeftIcon class="w-4 h-4 mx-auto" />
        </div>
      </div>

      <ul
        class="relative w-full h-10 flex flex-row gap-x-10 px-20 overflow-x-auto bg-gray-100"
      >
        <template v-for="item of workoutType" :key="item">
          <li
            class="mx-3 flex items-center justify-center cursor-pointer"
            style="cursor: pointer"
          >
            <input
              type="radio"
              class="machine-radio hidden"
              :id="item.type"
              :value="item"
              name="machines"
              v-model="selectedWorkout"
            />
            <label
              :for="item.type"
              class="text-xs font-normal text-center cursor-pointer"
            >
              {{ item.label }}
            </label>
          </li>
        </template>
      </ul>
      <div
        class="absolute right-0 top-3 bottom-3 px-2 bg-gray-100 border-l border-l-gray-300 z-10"
      >
        <div class="h-full flex items-center">
          <ChevronRightIcon class="w-4 h-4 mx-auto" />
        </div>
      </div>
    </div>
    <div class="max-w-3xl mt-32 mx-auto">
      <h3 class="text-5xl text-center mb-16">
        {{ selectedWorkout.label }}
      </h3>
      <div class="grid grid-cols-3 gap-x-8 gap-y-28">
        <template v-if="selectedWorkout">
          <template v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]">
            <div class="group/item flex flex-col gap-y-6">
              <div class="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516919549054-e08258825f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  class="group-hover/item:scale-110 transition-transform duration-300"
                />
                {{ item }}
                <!-- <divg
              class="absolute bottom-0 left-0 group-hover/item:bottom-1/2 group-hover/item:left-1/2 group-hover/item:-translate-x-1/2 group-hover/item:-translate-y-1/2 transition-all duration-700"
            >
              <h5
                class="strokeme h-fit group-hover/item:w-full group-hover/item:py-2 group-hover/item:px-4 group-hover/item:scale-150 origin-center bg-white/30 font-bold transition-all ease-out duration-1000"
              >
                MachineA
              </h5>
            </divg> -->
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
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { Ref, ref } from "vue";

/*
|------------------------------------------------------------------------
| Machine Type
|------------------------------------------------------------------------
*/
interface WorkoutType {
  type: string;
  label: string;
}
const workoutType: Ref<WorkoutType[]> = ref([
  {
    type: "all",
    label: "All",
  },
  {
    type: "leg",
    label: "Leg",
  },
  {
    type: "arm",
    label: "Arm",
  },
  {
    type: "chest",
    label: "Chest",
  },
  {
    type: "back",
    label: "Back",
  },
  {
    type: "shoulder",
    label: "Shoulder",
  },
  {
    type: "abs",
    label: "Abs",
  },
]);
const selectedWorkout: Ref<WorkoutType> = ref(workoutType.value[0]);

/*
|------------------------------------------------------------------------
| Machine Type
|------------------------------------------------------------------------
*/
const MACHINE_TYPE = {
  All: "all",
  Arm: "arm",
  Chest: "chest",
  Back: "back",
  Shoulder: "shoulder",
  Abs: "abs",
} as const;

type MachineType = keyof typeof MACHINE_TYPE;
/*
type MachineType = "All" | "Arm" | "Chest" | "Back" | "Shoulder" | "Abs"
*/
type MachineTypeof = typeof MACHINE_TYPE;
/*
type MachineTypeof = {
    readonly All: "all";
    readonly Arm: "arm";
    readonly Chest: "chest";
    readonly Back: "back";
    readonly Shoulder: "shoulder";
    readonly Abs: "abs";
} 
*/
type ObjectValue<T> = T[keyof T];
type MachineObjectValue = ObjectValue<MachineTypeof>;
/*
type MachineObjectValue = "all" | "arm" | "chest" | "back" | "shoulder" | "abs"
*/

function getMachineType(machine: MachineType): MachineObjectValue {
  return MACHINE_TYPE[machine];
}
</script>

<style scoped>
input[name="machines"]:checked + label {
  font-weight: bold;
}

* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
*::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
</style>
