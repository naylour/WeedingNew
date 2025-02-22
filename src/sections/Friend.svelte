<section class="friends">
	<h2 class="title">Дорогие родные<br />и друзья!</h2>

	<div class="text">
		<p>С огромной радостью приглашаем вас разделить с нами самый важный день в нашей жизни!</p>
		<p>Мы решили начать новую главу и хотим отметить это событие с вами.</p>
	</div>

    <img class="cat" src="./images/cat.png" alt="Cat">
    <img class="bg" src="./icons/friends_bg.svg" alt="">
</section>

<style lang="postcss">
	@reference "styles/index.css";

    .friends {
        @apply relative;
    }

    .bg {
        @apply absolute w-[264px] h-[175px] -bottom-[36%] left-[50%] -translate-x-[50%];
    }

    .text {
        @apply pt-[20px];
    }

    .text p:not(:first-child) {
        @apply pt-[10px];
    }

    .cat {
        @apply pt-[30px] mx-auto;
    }
</style>
