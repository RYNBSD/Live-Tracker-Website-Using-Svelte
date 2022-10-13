<script>
    import { countries } from "../../public/data/data";
    import CountryCard from "./CountryCard.svelte";
</script>

<div class="areas-right">
    <div class="areas-right-search">
        <div class="areas-right-search-input">
            <input type="seach" placeholder="Filter to a location">
        </div>
        <div class="areas-right-search-global">
            <h4>Global</h4>
            <h4>1,245,347</h4>
        </div>
    </div>
    <div class="split"/>
    <div class="areas-right-countries">
        {#each countries as country (country.country) }
            <CountryCard 
                img={country.img}
                country={country.country}
                num={country.num}
            />
        {/each}
    </div>
</div>

<style>
    .areas-right {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 1rem;
        gap: 1rem;
    }
    .areas-right-search {
        width: 90%;
        margin: 0 auto;
    }
    .areas-right-search-input {
        border: 1px solid #bec1e020;
        padding: .5rem 1rem;
    }
    .areas-right-search-global {
        border: 1px solid #bec1e097;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1rem;
        border-radius: 8px;
    }
    .areas-right-search-global > h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: #262C7C;
    }
    .split {
        width: 90%;
        height: 1px;
        margin: 0 auto;
        background-color: #bec1e020;
    }
    .areas-right-countries {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>