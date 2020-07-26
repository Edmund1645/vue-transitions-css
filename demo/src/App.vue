<template>
	<div id="app">
		<Nav />
		<div id="body">
			<a
				href="https://github.com/Edmund1645/vue-transitions-css"
				class="github-btn"
				>View Github Repo</a
			>
			<div id="selector">
				<p>Select effect here 👇</p>
				<select name="animations" id="animations-list" v-model="selected">
					<option
						v-for="(animation, index) in animations"
						:key="index"
						:value="animation.class"
					>
						{{ animation.name }}
					</option>
				</select>
				<button @click="animate" class="animation-toggle-button">Toggle</button>
			</div>
			<div id="preview">
				<p class="class-name">
					Class name: <strong>{{ selected }}</strong>
				</p>
				<transition :name="selected" mode="out-in">
					<Content v-if="show" />
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from "@/components/Nav";
import Content from "@/components/Content";
import animations from "@/assets/animations.js";
export default {
	name: "App",
	components: {
		Nav,
		Content,
	},
	data() {
		return {
			selected: "fade",
			show: true,
			animations: [],
		};
	},
	mounted() {
		this.animations = animations.sort((a, b) => (a.name > b.name ? 1 : -1));
	},
	methods: {
		animate() {
			this.show = !this.show;
		},
	},
};
</script>

<style>
:root {
	--color-primary: #44a1df;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	position: relative;
}
#body {
	max-width: 700px;
	margin: auto;
	padding: 20px;
}
#animations-list {
	width: 70%;
	display: inline-block;
	margin-right: 30px;
	appearance: none;
	padding: 1rem;
	background: #ffffff;
	border: 2px solid var(--color-primary);
}
.animation-toggle-button,
.github-btn {
	border-radius: 4px;
	color: white;
	background-color: var(--color-primary);
	border: 1px solid var(--color-primary);
	font-weight: 700;
	cursor: pointer;
	padding: 1rem;
	font-size: 1.2rem;
}

.animation-toggle-button:hover,
.github-btn:hover {
	opacity: 0.85;
}
#preview {
	margin-top: 10px;
}
.class-name {
	margin: 20px 0px;
}

.github-btn {
	text-decoration: none;
	border-radius: 38px;
	color: #fff;
	display: block;
	text-align: center;
	margin: 0.5rem auto;
	width: 50%;
}

@media only screen and (max-width: 600px) {
	#animations-list {
		width: 100%;
		margin: 0.5rem auto;
	}

	.github-btn {
		width: 80%;
	}

	.animation-toggle-button {
		display: block;
		margin: 0.5rem auto;
	}
}
</style>
