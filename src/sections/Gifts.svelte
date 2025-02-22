<section class="gifts">
	<h2 class="title">Подарки</h2>
	<h3 class="subtitle">Не беспокойтесь насчет<br /> подарков!</h3>

    <img src="./icons/gifts_bg.svg" alt="" class="bg">


    <div class="content">
        <img src="./images/gifts_car.png" alt="Icon" class="car" />
        <img src="./icons/gifts_plate.svg" alt="" class="plate">
        <p>Мы любим деньги, машины и недвижимость :)</p>
    </div>
</section>

<style lang="postcss">
	@reference "styles/index.css";

    .gifts {
        @apply relative;
    }

	.subtitle {
		@apply text-secondary pt-[10px] text-[30px];
	}

    .bg {
        @apply absolute top-[40%] -left-[10px] w-[calc(100%+20px)] h-auto;
    }

    .content {
        @apply relative mt-[150px];
    }
    .content .car {
        @apply absolute -top-[60px] left-[50%] -translate-x-[50%] -z-1;
    }
    .content p {
        @apply absolute top-[50%] left-[50%] -translate-[50%] text-white w-[80%];
    }
</style>
