<script>
    import AreasLeft from "../components/AreasLeft.svelte";
    import AreasRight from "../components/AreasRight.svelte";

</script>

<div class="liveTracker__areas" id="result">
    <div class="container">
        <div class="liveTracker__areas-left">
            <AreasLeft />
        </div>
        <div class="liveTracker__areas-right">
            <AreasRight />
        </div>        
    </div>
</div>

<style>
    .liveTracker__areas {
        width: 100%;
        margin-top: 13rem;
    }
    .container {
        gap: 3em;
    }
    .liveTracker__areas-left {
        flex: 2;
    }
    .liveTracker__areas-right {
        flex: 1;
    }
    .liveTracker__areas-left,
    .liveTracker__areas-right {
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
        height: 668px;
        width: 100%;
    }
    @media (max-width: 80rem) {
        .liveTracker__areas {
            margin-top: 7rem;
        }
    }
    @media (max-width: 60rem) {
        .container {
            flex-direction: column !important;
        }
        .liveTracker__areas-left,
        .liveTracker__areas-right {
            width: 100%;
        }
    }
</style>
