document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <div class="inner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 foot-about">
                <ul class="list-inline">
                    <li class="list-inline-item">Lənkəran, Haftoni, Azərbaycan</li>
                    <li class="list-inline-item">|</li>
                    <li class="list-inline-item">Telefon: +994 70 298 84 83</li>
                    <li class="list-inline-item">|</li>
                    <li class="list-inline-item">Email: info@honeyland.az</li>
                </ul>
            </div>
        </div>
    </div>
</div>
        <div class="copy">
            <div class="container">
                <a href="https://www.honeyland.az/">2022 &copy; Bütün Hüquqlar Qorunur</a>
            </div>
        </div>
    `;
    document.querySelector('footer').innerHTML = footerHTML;
});
