<script>
    import BlogsCard from "../components/BlogsCard.svelte";
    import Button from "../components/Button.svelte";
    import { blogs } from "../../public/data/data";

</script>

<div class="liveTracker__blogs" id="blogs">
    <div class="container">
        <div class="liveTracker__blogs-head">
            <h1>Blog topics</h1>
        </div>
        <div class="liveTracker__blogs-cards">
            {#each blogs  as blog (blog.title)}
                <BlogsCard 
                    img={blog.img}
                    title={blog.title}
                    desc={blog.desc}
                    time={blog.time}
                />
            {/each}
        </div>
        <div class="liveTracker__blogs-button">
            <Button 
                text="View all"
            />
        </div>
    </div>
</div>

<style>
    .liveTracker__blogs {
        width: 100%;
        margin-top: 5rem;
    }
    .container {
        flex-direction: column !important;
        gap: 5rem;
    }
    .liveTracker__blogs-head > h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #262C7C;
    }
    .liveTracker__blogs-cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
</style>
