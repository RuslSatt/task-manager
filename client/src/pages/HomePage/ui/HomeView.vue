<template>
	<div class="wrapper">
		<nav-bar @hide-menu="onHideMenu"></nav-bar>
		<div class="main">
			<side-bar></side-bar>
			<div class="main__content">Home Page</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store/userStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/widgets/Navbar';
import SideBar from '@/widgets/SideBar';

const userStore = useUserStore();
const menu = ref();

const initUser = () => {
	userStore.initUser();
	if (!userStore.authUser) {
		const router = useRouter();
		router.push('/auth');
	}
};

const hideMenu = ref(false);

const onHideMenu = () => {
	menu.value.hide = hideMenu.value;
};

onMounted(initUser);
</script>

<style scoped>
.wrapper {
	display: flex;
	height: 100%;
	flex-direction: column;
}
.main {
	display: flex;
	flex: 1 1 0;
	min-height: 1px;
}

.main__content {
	display: flex;
	flex: 1;
	flex-direction: column;
}
</style>
