<script lang="ts">
</script>

{#snippet schedule(time: string, title: string, type?: boolean)}
	<div class="schedule-block">
		<div class="time">
			<p>{time}</p>
			<img src="./icons/underline.svg" alt="Time: {time}" />
		</div>
		<div class="text">
			<p>{@html title}</p>
			{#if type !== undefined}
				<a target="_blank" href="https://yandex.ru/maps/-/CHu6eKkf"
					>{type ? 'ул. Ленина, 37, Майкоп' : 'в ресторане'}</a
				>
			{/if}
		</div>
	</div>
{/snippet}

<section class="schedule">
	<h2 class="title">
		<img src="./icons/schedule.svg" alt="" />
		Расписание
	</h2>

	{@render schedule('11:30', 'торжественная<span>регистрация</span>', true)}
	{@render schedule('16:00', 'выездная<span>регистрация</span>', false)}
	{@render schedule('16:30', 'начало банкета')}
</section>

<style lang="postcss">
	@reference "styles/index.css";

	.schedule {
		@apply px-[10px];
	}

	.title {
		@apply relative;
	}
	.title img {
		@apply absolute top-0 left-[50%] -translate-x-[50%];
	}

	.schedule-block {
		@apply flex gap-[20px] pt-[14px] text-left;
		@apply mx-auto text-[32px] leading-[100%] font-bold;
	}
	.schedule-block .time {
		@apply relative;
	}
	.schedule-block .text {
        @apply w-full;
	}
    .schedule-block .text a {
        @apply block text-[14px] w-full text-right;
    }
	:global(.schedule-block .text span) {
		@apply block text-right;
	}

	.schedule-block .time img {
		@apply absolute;
	}
</style>
