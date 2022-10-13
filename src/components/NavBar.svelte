<script>
    import virus from "../../public/SVGs/virus.svg"
</script>

<nav class="liveTracker__header-navbar">
    <div class="container">
        <div class="liveTracker__header-navbar_logo">
            <img src={virus} alt="virus logo">
            <h1>COVID-19</h1>
        </div>
        <ul class="liveTracker__header-navbar_list">
            <li class="liveTracker__header-navbar_list-item">
                <a href="#home" class="liveTracker__header-navbar_list-link">Home</a>
            </li>
            <li class="liveTracker__header-navbar_list-item">
                <a href="#result" class="liveTracker__header-navbar_list-link">Our Results</a>
            </li>
            <li class="liveTracker__header-navbar_list-item">
                <a href="#blogs" class="liveTracker__header-navbar_list-link">Blogs</a>
            </li>
            <li class="liveTracker__header-navbar_list-item">
                <a href="#footer" class="liveTracker__header-navbar_list-link">Footer</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    .liveTracker__header-navbar {
        background-color: #262C7C;
        width: 100%;
        border-bottom: 1px solid #BEC1E020;
    }
    .container {
        justify-content: space-between !important;
        padding: 1rem 0;
    }
    .liveTracker__header-navbar_logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #fff;
        width: 40%;
    }
    .liveTracker__header-navbar_list {
        list-style: none;
        display: flex;
        width: 60%;
        justify-content: space-between;
    }
    .liveTracker__header-navbar_list-item:hover .liveTracker__header-navbar_list-link {
        color: #EB0065;
    }
    .liveTracker__header-navbar_list a {
        color: #BEC1E0;
        transition: all .5s;
    }
    @media (max-width: 40rem) {
        .liveTracker__header-navbar_logo > h1 {
            font-size: 20px;
        }
    }
</style>