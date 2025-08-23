<script setup lang="ts">
import { BriefcaseIcon, CalendarDateRangeIcon } from '@heroicons/vue/16/solid'
import { storeToRefs } from 'pinia';
import { careerList, type Career } from 'public/data/careerList';
import type CommonModal from '../Common/CommonModal.vue';

const { careerDOM } = storeToRefs(useScrollStore());
const refCareer = ref<HTMLElement | null>(null);
const modalRef = ref<InstanceType<typeof CommonModal> | null>(null);
const openModal = (data: Career) => {
  modalRef.value?.open(data);
}

onMounted(() => {
  careerDOM.value = refCareer.value;
})
</script>
<template>
<div ref="refCareer">
  <h1>Career Timeline</h1>
  <div class="card-content">
    <div v-for="(data, index) in careerList" :key="index">
      <div class="timeline-item">
        <CalendarDateRangeIcon class="icon"/>
        <span class="period">{{ data.period }}</span>
      </div>
      <div class="timeline-item">
        <BriefcaseIcon class="icon"/>
        <p class="company pointer" @click="openModal(data)">
          {{ data.company }}: <span class="position">{{ data.position }}</span>
        </p>
      </div>
      <Divider
        v-if="index < careerList.length - 1"
        color="var(--color-accent2)"
      />
    </div>
  </div>
  <CommonModal
    ref="modalRef"
    size="large"
    show-close-button
  >
    <template #content="{ data }">
      <div class="modal-career-content">
        <div class="career-header">
          <p class="career-title">{{ data?.company }}</p>
          <span class="career-subtitle">{{ data?.position }}</span>
          &nbsp;
          <span class="career-period">{{ data?.period }}</span>
        </div>

        <div class="career-description">
          <p>{{ data?.description }}</p>
        </div>

        <div class="career-responsibilities">
          <ul class="responsibilities">
            <CommonDropdown
              v-for="(value, key) in data?.responsibilities"
              :key="key"
              :item="key"
              :sub-items="value"
              :use-arrow="true"
            />
          </ul>
        </div>
      </div>
    </template>
  </CommonModal>
</div>
</template>
<style scoped>
;
.timeline-item {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 2px;
}
.period {
  font-size: xx-large;
}
.company {
  display: inline-block;
  font-size: large;
  margin-right: 5px;
}
.company:hover {
  color: var(--color-accent1);
}

/* 모달 내부 스타일 */
.modal-career-content {
  .career-header {
    margin-bottom: 24px;
    border-bottom: 2px solid var(--color-accent1);
    padding-bottom: 16px;
  }

  .career-title {
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--color-text);
    /* margin-bottom: 8px; */
    margin: 0;
  }

  .career-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-text);
    opacity: 0.9;
    margin-bottom: 8px;
  }

  .career-period {
    font-size: 1.2rem;
    color: var(--color-accent2);
    font-weight: 500;
  }

  .career-description {
    margin-bottom: 24px;
    line-height: 1.4;
    font-size: 1.1rem;
    color: var(--color-text);
    opacity: 0.9;
  }

  .career-responsibilities {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 16px;
      color: var(--color-text);
    }

    .responsibilities {
      list-style: none;
      padding: 0;
    }
  }
}
</style>