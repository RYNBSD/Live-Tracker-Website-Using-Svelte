<script>
    export let title = "";
    export let topic = {};
</script>

<div class="liveTracker__card">
    <h1>{title}</h1>
    <div class="container">
        {#each topic as t (t.title)}
            <div class="liveTracker__card-topic">
                <img src={t.img} alt="">
                <h1>{t.title}</h1>
                <p>{t.desc}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .liveTracker__card {
        width: 100%;
        text-align: center;
        margin: 5rem auto;
    }
    .liveTracker__card > h1 {
        margin: 2rem auto;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.2px;
        color: #262C7C;
    }
    .container {
        gap: 2rem;
    }
    .liveTracker__card-topic {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        gap: 2rem;
        padding: 1rem 2rem;
        width: 370px;
        height: 357px;
    }
    .liveTracker__card-topic > h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 40px;
        color: #262C7C;
    }
    .liveTracker__card-topic > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #6468A1;
    }
</style>
