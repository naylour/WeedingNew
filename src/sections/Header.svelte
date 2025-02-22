<script lang="ts">

</script>

<header class="header">
    <h1 class="invitation">
        Приглашаем<br /> вас на нашу
        <span class="weeding">свадьбу</span>
    </h1>

    <p class="date">
        <img class="arrow" src="./icons/header/arrow.svg" alt="">
        12.07.2025
    </p>

    <div class="childs">
        <div class="childs-block">
            <img class="child boy" src="./images/boy.png" alt="Boy">
            <img class="child girl" src="./images/girl.png" alt="Girl">
        </div>

        <img class="childs_border" src="./icons/child_border.svg" alt="Childs border">

        <div class="plate">
            <img class="plate-bg" src="./icons/child_plate.svg" alt="Childs border">
            <p class="plate_text">
                Т+В=

                <img src="./icons/heart.svg" alt="">
            </p>
        </div>
    </div>

    <img class="heart" src="./icons/header/heart1.svg" alt="">
    <img class="heart" src="./icons/header/heart2.svg" alt="">
    <img class="heart" src="./icons/header/heart3.svg" alt="">
    <img class="heart" src="./icons/header/heart4.svg" alt="">
    <img class="heart" src="./icons/header/heart5.svg" alt="">
    <img class="heart" src="./icons/header/heart6.svg" alt="">
    <img class="heart" src="./icons/header/heart7.svg" alt="">
    <img class="heart" src="./icons/header/heart8.svg" alt="">
    <img class="heart" src="./icons/header/heart9.svg" alt="">
    <img class="heart" src="./icons/header/heart10.svg" alt="">
</header>


<style lang="postcss">
    @reference "styles/index.css";

    .header {
        @apply relative;
    }

    .childs {
        @apply mt-[30px];
    }

    .invitation {
        @apply text-[38px];
    }

    .invitation .weeding {
        @apply text-[86px] leading-[86px];
    }

    .date {
        @apply relative pt-[34px] -rotate-5;
        @apply font-vinograd text-[55px] text-center;
    }

    .childs {
        @apply pt-[5px] mx-auto w-[235px];
    }

    .childs_border {
        @apply relative -left-1 z-0;
    }

    .childs-block {
        @apply relative z-1;
    }
    .child {
        @apply absolute;
    }

    .child.boy {
        @apply top-0 left-0;
    }

    .child.girl {
        @apply top-0 right-0;
    }

    .plate {
        @apply relative -top-[8px] z-2 flex justify-center items-center;
    }

    .plate_text {
        @apply flex justify-center items-center;
        @apply font-medium text-white font-sensei text-[32px];
    }

    .plate-bg {
        @apply absolute -z-1;
    }

    .heart, .arrow {
        @apply absolute;
    }

    .arrow {
        @apply -top-[30%] left-[16%];
    }

    .heart:nth-child(4) {
        @apply top-[40px] left-[30px];
    }
    .heart:nth-child(5) {
        @apply top-[60px] right-[30%];
    }
    .heart:nth-child(6) {
        @apply top-[100px] right-[10%];
    }
    .heart:nth-child(7) {
        @apply top-[190px] left-[14%];
    }
    .heart:nth-child(8) {
        @apply top-[44%] right-[10px];
    }
    .heart:nth-child(9) {
        @apply top-[54%] left-[10%];
    }
    .heart:nth-child(10) {
        @apply bottom-[216px] right-[30%];
    }
    .heart:nth-child(11) {
        @apply bottom-[180px] left-[20%];
    }
    .heart:nth-child(12) {
        @apply bottom-[160px] right-[10%];
    }
    .heart:nth-child(13) {
        @apply bottom-[20%] left-[10%];
    }
</style>
