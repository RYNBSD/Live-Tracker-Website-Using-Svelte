<script>
    import Areas from "./pages/Areas.svelte";
    import Blog from "./pages/Blog.svelte";
    import Cards from "./pages/Cards.svelte";
    import Footer from "./pages/Footer.svelte";
    import Header from "./pages/Header.svelte";

    import { Spread, symptoms } from "../public/data/data";
</script>

<main>
    <Header />
    <Areas />
    <Cards 
        title="How coronavirus spread"
        topic={Spread}
    />
    <Cards 
        title="Symptoms of coronavirus"
        topic={symptoms}
    />
    <Blog />
    <Footer />
</main>

<style>

</style>
