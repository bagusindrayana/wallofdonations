<script lang="ts">
    import { onMount } from "svelte";
    import Background from "../components/Background.svelte";
    import axios from "axios";
    import { register } from "swiper/element/bundle";
    import Swiper from "swiper";

    register();

    let supports: any[] = [];
    let texts: string[] = [];

    function getSupports() {
        const url = "/trakteer";
        axios.get(url).then((res) => {
            supports = res.data;
            let tmps = [];
            //distribute support to 300 texts
            for (let i = 0; i < 300; i++) {
                tmps.push(supports[i % supports.length].supporter_name);
            }
            texts = tmps;
            // swiper element
            const swiperEl: any = document.querySelector("swiper-container");

            // swiper parameters
            const swiperParams = {
                slidesPerView: 1,
                height: 100,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                centeredSlides: true,
                direction: "vertical",
                loop: true,
                on: {
                    init() {
                        // ...
                    },
                },
            };

            // now we need to assign all parameters to Swiper element
            Object.assign(swiperEl, swiperParams);

            // and now initialize it
            swiperEl.initialize();
        });
    }
    onMount(() => {
        getSupports();
    });
</script>

<svelte:head>
    <title>Wall Of Donations! Thank you for all your support!</title>
</svelte:head>

<main>
    <h1>thank you for all your support!!!</h1>
    <div class="slider">
        <swiper-container init="false">
            {#each supports as support, i}
                {#if support.support_message != null}
                    <swiper-slide>{support.support_message}</swiper-slide>
                {/if}
            {/each}
        </swiper-container>
    </div>
    <a href="https://trakteer.id/bagood" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023" height="40" style="border: 0px; height: 40px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;" alt="Trakteer Saya" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></a>
</main>
<Background {texts} />

<style>
    * {
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif,
            sans-serif;
    }
    html,
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    main {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        max-width: 800px;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding: 6px;
    }

    main h1 {
        color: #fff;
        text-transform: uppercase;
        font-size: 60px;
        text-align: center;
        text-shadow: 0 0 10px #383838;
    }

    .slider {
        width: 100%;
        height: 100px;
        color: #fff;
        overflow: hidden;
        text-align: center;
        font-size: 24px;
        text-shadow: 0 0 20px #5c5c5c;
        margin-bottom: 6px;
    }
</style>
