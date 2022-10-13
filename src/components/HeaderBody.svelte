<script>
    import Button from "./Button.svelte";
    import emo from "../../public/SVGs/emo.svg";

</script>

<div class="liveTracker__header-body">
    <div class="container">
        <div class="liveTracker__header-body_right">
            <h1>COVID-19 Live Tracker</h1>
            <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
            <div class="liveTracker__header-body_right-button">
                <Button
                    text="How to Protect"
                />
                <Button
                    text="FIND A DOCTOR"
                    transparent={true}
                />
            </div>
        </div>
        <div class="liveTracker__header-body_left">
            <img src={emo} alt="emo"/>
        </div>
    </div>
</div>

<style>
    .liveTracker__header-body {
        width: 100%;
        height: 100%;
        background-image: url("../../public/SVGs/HeaderBackground.svg");
    }
    .container {
        justify-content: space-between !important;
        gap: 2rem;
    }
    .liveTracker__header-body_right {
        width: 50%;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .liveTracker__header-body_right > h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.2px;
        text-transform: uppercase;
    }
    .liveTracker__header-body_right > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #BEC1E0;
    }
    .liveTracker__header-body_right-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
    @media (max-width: 80rem) {
        .liveTracker__header-body_left {
            display: none;
        }
        .liveTracker__header-body_right {
            width: 100%;
            margin: 10rem 0;
        }
    } 

</style>