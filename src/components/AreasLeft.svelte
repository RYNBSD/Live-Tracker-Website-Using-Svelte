<script>
    import world from "../../public/SVGs/world.svg";
    import mostEffected from "../../public/SVGs/mostEffected.svg";
    import lessEffected from "../../public/SVGs/lessEffected.svg";
</script>

<div class="areas-left">
    <div class="areas-right-title">
        <h1>Covid-19 Affected Areas</h1>
        <div class="areas-right-title-affected">
            <div class="areas-right-title-affected-right">
                <h3>Most affected</h3>
                <img src={mostEffected} alt="">
            </div>
            <div class="areas-right-title-affected-left">
                <h3>Less Affected</h3>
                <img src={lessEffected} alt="">
            </div>
        </div>
    </div>
    <div class="areas-right-img">
        <img src={world} alt="world">
    </div>
</div>

<style>
    .areas-left {
        height: 100%;
        display: grid;
        place-items: center;
    }
    .areas-right-title {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
    }
    .areas-right-title > h1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #2D2E39;
    }
    .areas-right-title-affected {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 50%;
    }
    .areas-right-title-affected-right,
    .areas-right-title-affected-left {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: start;
        color: #6468A1;
    }
    @media (max-width: 80rem) {
        .areas-left {
            padding: 1rem 2rem;
        }
        .areas-right-title-affected {
            display: grid;
            grid-template-rows: 1fr 1fr;
            row-gap: 1rem;
        }
    }
    @media (max-width: 60rem) {
        .areas-right-img img {
            width: 100%;
            height: 100%;
        }  
        .areas-right-title > h1 {
            font-size: 18px;
        }      
        h3 {
            font-size: 15px;
        }
    }

</style>