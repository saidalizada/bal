document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <div id="menu-jk" class="nav-part shadow-md bg-white navcol">
            <div class="container-lg">
                <div class="row p-2">
                    <div class="col-lg-4 p-2">
                        <a href="index.html"><img class="max-230" src="assets/images/logo.png" alt=""></a>
                        <a data-bs-toggle="collapse" data-bs-target="#menu" class="float-end d-lg-none pt-1 ps-3"><i class="bi pt-1 fs-1 cp bi-list"></i></a>
                    </div>
                    <div id="menu" class="col-lg-8 d-none d-lg-block">
                        <ul class="fw-bold float-end nacul fs-7">
                            <li class="float-start p-3 px-4"><a href="index.html">Ana Səhifə</a></li>
                            <li class="float-start p-3 px-4"><a href="about.html">Haqqımızda</a></li>
                            <li class="float-start p-3 px-4"><a href="products.html">Məhsullar</a></li>
                            <li class="float-start p-3 px-4"><a href="blog.html">Bloq</a></li>
                            <li class="float-start p-3 px-4"><a href="contact.html">Əlaqə</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('header').innerHTML = headerHTML;
});
