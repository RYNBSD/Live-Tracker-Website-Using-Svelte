<script>
    export let img = "";
    export let title = "";
    export let num = "";
    export let percent = "";
    export let trend = "";
    export let red = false;

</script>

<div class="status">
    <div class="status-img">
        <img src={img} alt="global">
    </div>
    <div class="status-body">
        <h4>{title}</h4>
        <h1>{num}</h1>
        <div class="percent">
            <img src={trend} alt="trending">
            <small class="blue" class:red={red}>{percent}</small>
        </div>
    </div>
</div>

<style>
    .status {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }
    .status-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: .5rem;
    }
    .status-body > h4 {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #6468A1;
    }
    .status-body > h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 40px;
        color: #262C7C;
    }
    .percent {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .blue {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #00DB75;
    }
    .red {
        color: #FF3E29 !important;
    }
</style>