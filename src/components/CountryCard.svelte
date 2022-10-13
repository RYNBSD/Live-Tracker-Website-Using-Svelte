<script>
    export let img = "";
    export let country = "";
    export let num = ""
</script>

<div class="country">
    <div class="country-img">
        <img src={img} alt="country"/>
        <h4>{country}</h4>
    </div>
    <div class="country-num">
        <p>{num}</p>
    </div>
</div>

<style>
    .country {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
    }
    .country-img {
        display: flex;
        gap: 1rem;
    }
    .country-img > h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: #2D2E39;
    }
    .country-num > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: right;
        color: #6468A1;
    }
</style>