<footer class="footer">
    <div class="wish">
        <img src="./icons/wish_plate.svg" alt="">
        <p class="wish_text">С нетерпением ждем встречи с вами! </p>
    </div>
    <p class="wish_ps">Тимур и Вика</p>

    <p class="questions">по всем вопросам пишите жениху или невесте</p>
</footer>

<style lang="postcss">
    @reference "styles/index.css";

    .wish {
        @apply relative;
    }

    .wish img {
        @apply mx-auto min-w-[247px] min-h-[202px];
    }

    .wish_text {
        @apply absolute top-[50%] left-[50%] -translate-[50%] text-white text-[26px];
    }

    .wish_ps {
        @apply text-[26px] text-accent;
    }

    .questions {
        @apply pt-[30px] text-black;
    }
</style>
