<script>
    import FooterNav from "../components/FooterNav.svelte";


</script>

<footer class="liveTracker__footer" id="footer">
    <div class="container">
        <FooterNav />
    </div>
    <div class="split"/>
    <div class="liveTracker__footer-copyright">
        <h2>&copy; designmamba, All Rights Reserved</h2>
    </div>
</footer>

<style>
    .container {
        padding: 2rem;
    }
    .liveTracker__footer {
        background: #262C7C;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        margin-top: 5rem;
    }
    .split {
        width: 100%;
        height: 1px;
        margin: 0 auto;
        background-color: #bec1e020;
    }
    .liveTracker__footer-copyright {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 1rem;
    }
</style>
