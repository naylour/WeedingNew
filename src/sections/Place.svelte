<section class="place">
    <h2 class="title">Место</h2>

    <img src="./images/place.png" alt="Place">
    <a target="_blank" href="https://yandex.ru/maps/-/CHu6eKkf">
        <img src="./icons/place_arrow.svg" alt="">
        Шоссейная ул., 2, станица Абадзехская,
        база отдыха “Лукоморье”
    </a>
</section>

<style lang="postcss">
    @reference "styles/index.css";

    .place {
        @apply px-[10px];
    }

    img {
        @apply pb-[10px];
    }

    a {
      @apply relative block px-[10px];
    }

    a img {
        @apply absolute -top-[5px] -left-[0px];
    }
</style>
