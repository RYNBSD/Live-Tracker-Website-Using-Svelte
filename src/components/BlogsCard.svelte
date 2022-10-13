<script>
    export let img ="";
    export let title = "";
    export let desc = "";
    export let time = "";
</script>

<div class="blog-card">
    <div class="blog-card-img">
        <img src={img} alt="image" width="100%" height="174px" loading="lazy">
    </div>
    <div class="blog-card-body">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div class="details">
            <small class="time">{time}</small>
            <small class="read-more">read more</small>
        </div>
    </div>
</div>

<style>
    .blog-card {
        background: #fff;
        border-radius: 10px;
        width: 370px;
        height: 399px;
        overflow: hidden;
        box-shadow: 0 0 15px #BEC1E020;
    }
    .blog-card-img {
        width: 100%;
        height: 174px;
    }
    .blog-card-body {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .blog-card-body > h1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #262C7C;
        text-align: start;
        width: 100%;
    }
    .blog-card-body > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #6468A1;
    }
    .details {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
    .time {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #878AA1;
    }
    .read-more {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #262C7C;
    }
</style>