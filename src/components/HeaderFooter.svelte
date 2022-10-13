<script>
    import global from "../../public/SVGs/global.svg";
    import live from "../../public/SVGs/live.svg";

    import { virusStatus } from "../../public/data/data";
    import StatusCard from "./StatusCard.svelte";

</script>

<div class="liveTracker__header-footer">
    <div class="liveTracker__header-footer_global">
        <div class="liveTracker__header-footer_global-img">
            <img src={global} alt="global">
        </div>
        <div class="liveTracker__header-footer_global-body">
            <div class="liveTracker__header-footer_global-body_title">
                <h4>Stats Overview</h4>
                <img src={live} alt="live">
            </div>
            <div class="liveTracker__header-footer_global-body_desc">
                <h1>Global</h1>
                <box-icon name='chevron-down'></box-icon>
            </div>
        </div>
    </div>
    {#each virusStatus as virus (virus.title)}
        <StatusCard
            img={virus.img} 
            title={virus.title}
            num={virus.num}
            percent={virus.percent}
            trend={virus.trend}
            red={virus.red}
        />
    {/each}
</div>

<style>
    .liveTracker__header-footer {
        position: relative;
        top: -12.5%;
        background-color: #fff;
        width: 90%;
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        column-gap: 1rem;
        margin: 0 auto;
        padding: 2rem;
        box-shadow: 0 0 15px #BEC1E020;
    }
    .liveTracker__header-footer > * {
        width: 100%;
    }
    .liveTracker__header-footer_global-body_title,
    .liveTracker__header-footer_global-body_desc,
    .liveTracker__header-footer_global-body,
    .liveTracker__header-footer_global {
        justify-content: center;
        align-items: center;
    }
    .liveTracker__header-footer_global {
        display: flex;
        gap: 1rem;
    }
    .liveTracker__header-footer_global-body {
        display: flex;
        flex-direction: column;
    }
    .liveTracker__header-footer_global-body_title,
    .liveTracker__header-footer_global-body_desc {
        display: flex;
        justify-content: flex-start !important;
        gap: 1rem;
        width: 100%;
    }
    .liveTracker__header-footer_global-body_title > h4 {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #6468A1;
    }
    .liveTracker__header-footer_global-body_desc > h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 40px;
        color: #262C7C;
    }
    @media (max-width: 80rem) {
        .liveTracker__header-footer {
            top: -25%;
        }
    }
    @media (max-width: 60rem) {
        .liveTracker__header-footer {
            position: none;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 40rem) {
        .liveTracker__header-footer {
            position: none;
            grid-template-columns: 1fr;
            row-gap: 2rem;
        }
    }
</style>