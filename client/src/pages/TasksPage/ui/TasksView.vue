<template>
	<div>
		<p-button class="btn" @click="dialogVisible = true"> Добавить задачу </p-button>

		<p-dialog
			:style="{ width: '50vw' }"
			:breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
			modal
			v-model:visible="dialogVisible"
		>
			<template #header>
				<div>
					<span>Задача</span>
				</div>
			</template>
			<p-input-text class="dialog-name" placeholder="Название задачи" v-model="name"></p-input-text>
			<div class="dialog-buttons">
				<p-button @click="dialogVisible = false">Отмена</p-button>
				<p-button type="primary" @click="addTask">Создать</p-button>
			</div>
		</p-dialog>

		<task-list></task-list>
	</div>
</template>

<script setup lang="ts">
import { type ITask, useTaskStore } from '@/entities/task';
import { useUserStore } from '@/entities/user';
import { ref } from 'vue';
import TaskList from '@/widgets/TaskList';

const name = ref('');
const dialogVisible = ref(false);

const taskStore = useTaskStore();
const userStore = useUserStore();

const addTask = async () => {
	const authUser = userStore.getUser;

	if (authUser) {
		const task: ITask = {
			name: name.value,
			userId: authUser.user.id,
			completed: false,
			deadline: undefined,
			priority: undefined
		};

		await taskStore.create(task);
	}

	name.value = '';
	dialogVisible.value = false;
};
</script>

<style scoped>
.btn {
	margin-bottom: 10px;
}

.dialog-name {
	margin-bottom: 10px;
	width: 100%;
}

.dialog-buttons {
	display: flex;
	gap: 5px;
	justify-content: flex-end;
}
</style>
