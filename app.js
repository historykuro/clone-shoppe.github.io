const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const login = $(".header__navbar-item--login")
const register = $(".header__navbar-item--register")
const switchLogin = $(".auth-form__switch--login")
const switchRegister = $(".auth-form__switch--register")
const modal = $(".modal")


login.addEventListener("click", function(){
    $(".modal__login").classList.remove('hide')
    $(".modal__register").classList.add('hide')
    control()
})
register.addEventListener("click", function(){
    $(".modal__register").classList.remove('hide')
    $(".modal__login").classList.add('hide')
    control()
})
function control(){
    modal.classList.remove('hidden')
    switchRegister.addEventListener('click', function(){
        $(".modal__login").classList.add('hide')
        $(".modal__register").classList.remove('hide')
        
    })
    switchLogin.addEventListener('click', function(){
        $(".modal__register").classList.add('hide')
        $(".modal__login").classList.remove('hide')
        
    })

         
    $$(".auth-form__controls-back").forEach(e => {
        e.addEventListener("click", function(e){
            modal.classList.add('hidden')
        })
    });                                              
}


$(".header__icon-search").addEventListener('click', function(){
    $(".header_search").classList.toggle("c-0")
})


// Handle Item
const app = {
    product: [
        {
            productImage: './images/NikeForceDIOR.jpg',
            productName: "Nike Force DIOR",
            productPriceOld: "1.200.000",
            productPriceNew: "740.000",
            productRatingSold: 6000,
            productAdress: "TP Hồ Chí Minh",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "36%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/Saucony.jfif',
            productName: "Saucony",
            productPriceOld: "600.000",
            productPriceNew: "400.000",
            productRatingSold: 1200,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "36%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/NikeAirMax.jpg',
            productName: "Nike Air Max",
            productPriceOld: "1.000.000",
            productPriceNew: "800.000",
            productRatingSold: 600,
            productAdress: "TP Buôn Ma Thuột",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "40%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/NikeJordan1Shadow.jpg',
            productName: "Nike Jordan1 Shadow",
            productPriceOld: "2.000.000",
            productPriceNew: "500.000",
            productRatingSold: 1100,
            productAdress: "TP Buôn Ma Thuột",
            // productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "60%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/23915659_304143040086612_1722873620673029931_n.jpg',
            productName: "YeeZi White",
            productPriceOld: "500.000",
            productPriceNew: "300.000",
            productRatingSold: 250,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "60%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/1cc3a338efeda9edcd0a93161a67f1aa_tn.jfif',
            productName: "Nike Air Force white",
            productPriceOld: "600.000",
            productPriceNew: "300.000",
            productRatingSold: 336,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "50%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/Giày-Nike-Air-Force-1-AF1-1.jpg',
            productName: "Nike Air Force AF1",
            productPriceOld: "600.000",
            productPriceNew: "300.000",
            productRatingSold: 369,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "50%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/giay-nike-air-force-1-low-07-black-multi-color-aq3692-1002.jpg',
            productName: "Nike Air Force AF1 Black Multi",
            productPriceOld: "900.000",
            productPriceNew: "500.000",
            productRatingSold: 405,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "40%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/giay-nike-air-jordan-1-dior-replica.jpg',
            productName: "Nike Air Jordan 1 Dior Replica",
            productPriceOld: "2.000.000",
            productPriceNew: "1.600.000",
            productRatingSold: 120,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "70%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/giay-Nike-kobe-6-size-55-cheap-Low-Have-A-Good-Game.jpg',
            productName: "Nike Kobe Low",
            productPriceOld: "700.000",
            productPriceNew: "250.000",
            productRatingSold: 708,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "10%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/giay-sneaker_63.jpg',
            productName: "Sneaker",
            productPriceOld: "500.000",
            productPriceNew: "250.000",
            productRatingSold: 890,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "30%",
            productDiscountReduce: "Giảm"
        },
        {
            productImage: './images/IMG_9772.jpg',
            productName: "Yeezy Black",
            productPriceOld: "600.00",
            productPriceNew: "300.000",
            productRatingSold: 1231,
            productAdress: "TP Hà Nội",
            productFavoriteHeading: "Yêu Thích",
            productDiscountPercent: "50%",
            productDiscountReduce: "Giảm"
        },
    ],
    render: function(){
        const _this = this
        const htmls = this.product.map(function(product){
            return `
                    <div class="col l-2-4 m-4 c-6 searchInput">
                    <a href="#" class="home-product-item">
                        <div class="home-product-item__img" style="background-image: url(${product.productImage});"></div>
                        <div class="home-product-item__wrapper">
                            <h4 class="home-product-item__name">${product.productName}</h4>
                            <div class="home-product-item__price">
                                <span class="home-product-item__price--old">${product.productPriceOld} <strong style="font-size: 14px;">đ</strong></span>
                                <span class="home-product-item__price--current">${product.productPriceNew} <strong style="font-size: 14px;">đ</strong></span>
                            </div>
                            <div class="home-product-item__rating">
                                <div class="home-product-item__rating--stars">
                                    <div class="home-product-item__rating--star-wrap">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="home-product-item__rating--star-wrap">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="home-product-item__rating--star-wrap">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="home-product-item__rating--star-wrap">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="home-product-item__rating--star-wrap">
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div class="home-product-item__rating--sold">${product.productRatingSold} Đã bán</div>
                            </div>
                            <div class="home-product-item__address">${product.productAdress}</div>
                        </div>
                        <div class="home-product-item__favourite">
                            <i class="fa-solid fa-check"></i>
                            <span class="home-product-item__favourite--heading">${product.value = ""? product.classList.add("hide") : product.productFavoriteHeading}</span>
                        </div>
                        <div class="home-product-item__discount">
                            <span class="home-product-item__discount--percent">${product.productDiscountPercent}</span>
                            <span class="home-product-item__discount--reduce">${product.productDiscountReduce}</span>
                        </div>
                    </a>
                </div>
            `
        })
        $('.productItem').innerHTML = htmls.join('')
        
    },
    currentIndex: 0,
    filterProduct: function(){
        const _this = this

        //InputSearch
        let SearchInput = $('.header_search-input')
        SearchInput.addEventListener('keyup', function(e){
            if(e.key == "Enter"){
                let txtSearch = e.target.value.trim().toLowerCase()
                let listProduct = $$('.searchInput')
                listProduct.forEach(item =>{
                    if(item.innerText.toLowerCase().includes(txtSearch)){
                        item.classList.remove('hidden')
                    }else{
                        item.classList.add('hidden')
    
                    }
                })
                $$(".home-filter__btn").forEach(e=>{
                    e.classList.remove('btn--primary')
                })
                $('.home-filter__relevance').classList.add('btn--primary')
                e.target.value = ""
            }
        })
        // header__search-history
       
        
        

        $$('.home-filter__btn').forEach(function(e, index){
            
            e.addEventListener('click', function(){
                $$(".home-filter__btn").forEach(e=>{
                    e.classList.remove('btn--primary')
                })
                // e.classList.remove('btn--primary')
                this.classList.add("btn--primary")
                
               
            })
        });
        $('.ProductSmallToBig').addEventListener('click', function(){
            function sortFloat(a,b){ return a.productPriceNew - b.productPriceNew}
            _this.product.sort(sortFloat)
            _this.render()
        })
        $('.ProductBigToSmall').addEventListener('click', function(){
            function sortFloat(a,b){ return  b.productPriceNew - a.productPriceNew}
            _this.product.sort(sortFloat)
            _this.render()
        })
        $('.home-filter__sold').addEventListener('click', function(){
            function sortFloat(a,b){ return b.productRatingSold - a.productRatingSold }
            _this.product.sort(sortFloat)
            _this.render()
        })
        
    },
    start: function(){
        this.filterProduct()
        this.render()
    }
}

app.start()

