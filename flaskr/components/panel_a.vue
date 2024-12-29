<template>
  <div class="text-white">
    <ul>
      <li class="mb-6" v-for="(item, index) in data" :key="index">
        <div class="flex items-center">
          <div>
            <rux-icon
              size="1.5rem"
              :class="iconColor(item.status)"
              icon="check-circle"
            ></rux-icon>
          </div>
          <div class="mt-3.5 ml-3">
            <div class="text-primary-200">{{ item.label }}</div>
            <div
              class="capitalize text-sm text-left"
              :class="
                item.status === 'normal'
                  ? 'text-primary-200 opacity-50'
                  : 'text-white'
              "
            >
              {{ item.status }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          status: "normal",
          label: "All Systems Check",
        },
        {
          status: "normal",
          label: "Rendezvous Burn Slow",
        },
        {
          status: "normal",
          label: "Prepare Rendezvous Burn",
        },
        {
          status: "applied",
          label: "Thermal Shield",
        },
        {
          status: "normal",
          label: "Burn Go/No-Go",
        },
        {
          status: "awaiting",
          label: "Power Completion",
        },
        {
          status: "normal",
          label: "Status Deck Check",
        },
      ],
    };
  },
  methods: {
    iconColor(status) {
      if (status === "normal") {
        return "text-primary-200";
      }

      if (status === "awaiting") {
        return "text-serious-500";
      }

      if (status === "applied") {
        return "text-normal-500";
      }
      return "text-primary-200";
    },
  },
};
</script>

<style scoped></style>