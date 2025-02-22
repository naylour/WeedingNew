<section class="detail">
    <h2 class="title">Маленькая<br />деталь</h2>

    <div class="detail-content">
        <img src="./icons/detail_plate.svg" alt="">
        <p>Тех, кто не хочет вызывать такси или трезвого водителя довезет наш автобус(там до 15 человек, поэтому пишите заявку заранее, чтобы мы успели всех довезти)</p>
    </div>
</section>

<style lang="postcss">
    @reference "styles/index.css";

    .detail-content {
        @apply mt-[20px] relative max-w-[386px] w-full h-[216px];
    }
    .detail-content img {
        @apply absolute top-[50%] left-[50%] -translate-[50%];
        @apply min-w-[130%] min-h-[130%];
    }
    .detail-content p {
        @apply absolute top-[50%] left-[50%] -translate-[50%];
        @apply w-[300px] text-white text-[30px];
    }
</style>
