<script lang="ts">
    import { onMount } from "svelte";
    export let texts: string[] = [];
</script>

<!-- loop 100 word "Donation" -->
<div class="bg">
    {#if texts.length > 0}
        {#each Array.from({ length: 15 }, (_, x) => x) as x}
            <div class="list {x % 2 == 0 ? 'LeftToRight' : 'RightToLeft'}">
                <div class="animate">
                    {#each Array.from({ length: 10 }, (_, i) => i) as i}
                        <span>{texts[x * 10 + i] || "DONATION"} |</span>
                    {/each}
                </div>
                <div class="animate">
                    {#each Array.from({ length: 10 }, (_, i) => i) as i}
                        <span>{texts[x * 10 + i] || "DONATION"} |</span>
                    {/each}
                </div>
            </div>
        {/each}
    {/if}
</div>

<style>
    .bg {
        background-color: black;
        overflow: hidden;
        position: absolute;
        z-index: -1;
        /* width: 200%;
        height: 200%; */
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;
    }

    .bg .list {
        opacity: 0.2;
        display: flex;
        justify-content: start;
        align-items: start;
        width: auto;
        gap: 6px;
        position: relative;
        
    }

    .bg .list .animate {
        display: flex;
        justify-content: start;
        align-items: start;
        width: auto;
        gap: 12px;
        
    }

    .bg .list span {
        font-size: 40px;
        color: #fff;
        text-transform: uppercase;
        display: inline;
        text-wrap: nowrap;
    }

    @keyframes transitionSpeed {
        0% {
            animation-duration: 10s;
        }
        100% {
            animation-duration: 120s;
        }
    }

    /* .move-left {
        animation: moveLeft 10s linear infinite;
    }

    .move-right {
        animation: moveRight 10s linear infinite;
    }

    @keyframes moveLeft {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes moveRight {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    } */

    .scroll {
        white-space: nowrap;
        margin: 0 2em;
    }

    .scroll div {
        display: flex;
        gap: 2em;
    }

    .scroll p {
        font-size: 5em;
        color: white;
        font-weight: bold;
        margin-bottom: 0;
        line-height: 10px;
    }

    .RightToLeft {
        animation: RightToLeft 120s infinite linear;
    }

    @keyframes RightToLeft {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-50%);
        }
    }

    .LeftToRight {
        animation: LeftToRight 120s infinite linear;
    }

    @keyframes LeftToRight {
        from {
            transform: translateX(-50%);
        }
        to {
            transform: translateX(0%);
        }
    }
</style>
