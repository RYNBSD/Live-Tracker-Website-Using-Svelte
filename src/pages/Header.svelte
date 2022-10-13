<script>
    import HeaderFooter from "../components/HeaderFooter.svelte";
    import HeaderBody from "../components/HeaderBody.svelte";
    import NavBar from "../components/NavBar.svelte";


</script>

<header class="liveTracker__header" id="home">
    <NavBar />
    <HeaderBody />
    <HeaderFooter />
    <div class="more-space" />
</header>

<style>
    .liveTracker__header {
        width: 100%;
        height: 100vh;
        background-color: #262C7C;
    }
    @media (max-width: 60rem) {
        .liveTracker__header {
            height: fit-content;
        }
        .more-space {
            height: 30px;
        }
    }
</style>
