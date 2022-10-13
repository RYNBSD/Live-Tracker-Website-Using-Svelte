<script>
    import virus from "../../public/SVGs/virus.svg";
</script>

<div class="footer-nav">
    <div class="footer-nav-logo">
        <div class="footer-nav-logo-img">
            <img src={virus} alt="">
            <h1>COVID-19</h1>
        </div>
        <p>DesignMamba an online marketplace built to cope with promising future</p>
    </div>
    <ul class="footer-nav-useful-links">
        <h1>USEFUL LINKS</h1>
        <li class="footer-nav-useful-links-item">
            <a href="#">Why?</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Carrers</a>
        </li>
        <li>
            <a href="#">Blog</a>
        </li>
        <li>
            <a href="#">Contract</a>
        </li>
    </ul>
    <div class="footer-nav-contact-us-location">
        <div class="contact-us">
            <h1>Contact Us</h1>
            <div class="contact">
                <p>Tel: +8801765668561</p>
                <p>support@designmamba.com</p>
            </div>
        </div>
        <div class="location">
            <h1>Location</h1>
            <p>Lalmatia, Dhaka-1207</p>
        </div>
    </div>
    <div class="keep-in-touch">
        <h1>Keep In Touch</h1>
        <ul class="social-media">
            <li>
                <box-icon name='facebook' type='logo' color="#EB0065"></box-icon>
            </li>
            <li>
                <box-icon type='logo' name='youtube' color="#EB0065"></box-icon>
            </li>
            <li>
                <box-icon type='logo' name='instagram' color="#EB0065"></box-icon>
            </li>
        </ul>
    </div>
</div>

<style>
    .footer-nav {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
    }
    .footer-nav-logo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
    .footer-nav-logo-img {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .footer-nav-logo-img > h1 {
        color: #fff;
        font-size: 18px;
        letter-spacing: .5px;
    }
    .footer-nav-logo > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .footer-nav-useful-links {
        list-style: none;
    }
    .footer-nav-useful-links > h1 {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-transform: uppercase;
        color: #E4E5F7;
        margin-bottom: 2rem;
    }
    .footer-nav-useful-links li {
        margin: .5rem 0;
    }
    .footer-nav-useful-links a:hover {
        color: #EB0065;
    }
    .footer-nav-useful-links a {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #BEC1E0;
        transition: color .5s;
    }
    .footer-nav-contact-us-location {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
    }
    .footer-nav-contact-us-location h1 {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        text-transform: uppercase;
        color: #E4E5F7;
        margin-bottom: 1rem;
    }
    .footer-nav-contact-us-location p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: .5rem;
    }
    .keep-in-touch {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    }
    .keep-in-touch h1 {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
        color: #E4E5F7;
        width: 100%;
    }
    .social-media {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: .5rem;
        margin: 0 auto;
        width: 100%;
    }
    .social-media > li {
        border: 1px solid #fff;
        border-radius: 50%;
        padding: .5rem;
    }
    @media (max-width: 60rem) {
        .footer-nav {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
        }
    }
    @media (max-width: 40rem) {
        .footer-nav {
            grid-template-columns: 1fr;
            row-gap: 2rem;
        }
    }
</style>