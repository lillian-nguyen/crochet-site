// showing sidebar messages on hover
const sidebarProduct = document.getElementById('sidebar-products')
sidebarProduct.addEventListener('mouseover', showProducts)
sidebarProduct.addEventListener('mouseout', hideProducts)

function showProducts() {
    document.querySelector('.ribbon-1').style.visibility = 'initial'
}

function hideProducts() {
    document.querySelector('.ribbon-1').style.visibility = 'hidden'
}

const sidebarContact = document.getElementById('sidebar-contact')
sidebarContact.addEventListener('mouseover', showContact)
sidebarContact.addEventListener('mouseout', hideContact)

function showContact() {
    document.querySelector('.ribbon-2').style.visibility = 'initial'
}

function hideContact() {
    document.querySelector('.ribbon-2').style.visibility = 'hidden'
}

const sidebarAbout = document.getElementById('sidebar-about')
sidebarAbout.addEventListener('mouseover', showAbout)
sidebarAbout.addEventListener('mouseout', hideAbout)

function showAbout() {
    document.querySelector('.ribbon-3').style.visibility = 'initial'
}

function hideAbout() {
    document.querySelector('.ribbon-3').style.visibility = 'hidden'
}

//shop inventory details

const product1 = document.querySelector('.p1-h4')
product1.addEventListener('click', productDetails)
product1.addEventListener('mouseover', changeProduct1Color)
product1.addEventListener('mouseout', resetProduct1Color)
product1.addEventListener('mouseover', addProduct1Border)
product1.addEventListener('mouseout', removeProduct1Border)

const product2 = document.querySelector('.p2-h4')
product2.addEventListener('click', productDetails)
product2.addEventListener('click', p2Polaroid)
product2.addEventListener('mouseover', addProduct2Border)
product2.addEventListener('mouseout', removeProduct2Border)

const product3 = document.querySelector('.p3-h4')
product3.addEventListener('click', productDetails)
product3.addEventListener('click', p3Polaroid)
product3.addEventListener('mouseover', addProduct3Border)
product3.addEventListener('mouseout', removeProduct3Border)

const product4 = document.querySelector('.p4-h4')
product4.addEventListener('click', productDetails)
product4.addEventListener('click', p4Polaroid)
product4.addEventListener('mouseover', addProduct4Border)
product4.addEventListener('mouseout', removeProduct4Border)

const product5 = document.querySelector('.p5-h4')
product5.addEventListener('click', productDetails)
product5.addEventListener('click', p5Polaroid)
product5.addEventListener('mouseover', addProduct5Border)
product5.addEventListener('mouseout', removeProduct5Border)

function addProduct1Border() {
    document.querySelector('.p1').classList.add('product-borders')
}

function removeProduct1Border() {
    document.querySelector('.p1').classList.remove('product-borders')
}

function addProduct2Border() {
    document.querySelector('.p2').classList.add('product-borders')
}

function removeProduct2Border() {
    document.querySelector('.p2').classList.remove('product-borders')
}

function addProduct3Border() {
    document.querySelector('.p3').classList.add('product-borders')
}

function removeProduct3Border() {
    document.querySelector('.p3').classList.remove('product-borders')
}

function addProduct4Border() {
    document.querySelector('.p4').classList.add('product-borders')
}

function removeProduct4Border() {
    document.querySelector('.p4').classList.remove('product-borders')
}

function addProduct5Border() {
    document.querySelector('.p5').classList.add('product-borders')
}

function removeProduct5Border() {
    document.querySelector('.p5').classList.remove('product-borders')
}

function changeProduct1Color() {
    document.querySelector('.p1-h4').style.color = '#7CB1f9'
    document.querySelector('.p1-p').style.color = '#7CB1f9'
}

function resetProduct1Color() {
    document.querySelector('.p1-h4').style.color = '#9CC6EA'
    document.querySelector('.p1-p').style.color = '#9CC6EA'
}

function productDetails() {
    //showing the background box
    document.querySelector('.inventory-bg').style.visibility = 'initial'
    //hiding other headers
    document.querySelector('.p2').style.visibility = 'hidden'
    document.querySelector('.p3').style.visibility = 'hidden'
    document.querySelector('.p4').style.visibility = 'hidden'
    document.querySelector('.p5').style.visibility = 'hidden'
    //changing font color 
    document.querySelector('.p1').style.color = '#7CB1f9'
}

function p2Polaroid() {
    document.querySelector('.figure1-img').src = 'imgs/flowers.jpg'
    document.querySelector('.figure1-figcaption').innerText = 'dreamer'
    document.querySelector('.p1-h4').innerText = '02'
    document.querySelector('.p1-p').innerText = 'DREAMER'
}

function p3Polaroid() {
    document.querySelector('.figure1-img').src = 'imgs/street.jpg'
    document.querySelector('.figure1-figcaption').innerText = 'urs'
    document.querySelector('.figure1-figcaption').classList.add('adjust-p3')
    document.querySelector('.p1-h4').innerText = '03'
    document.querySelector('.p1-p').innerText = 'URS'
}

function p4Polaroid() {
    document.querySelector('.figure1-img').src = 'imgs/rollerskates.jpg'
    document.querySelector('.figure1-figcaption').innerText = 'epiphany'
    document.querySelector('.p1-h4').innerText = '04'
    document.querySelector('.p1-p').innerText = 'EPIPHANY'
}

function p5Polaroid() {
    document.querySelector('.figure1-img').src = 'imgs/tea.jpg'
    document.querySelector('.figure1-figcaption').innerText = 'happier than ever'
    document.querySelector('.figure1-figcaption').classList.add('adjust-p5')
    document.querySelector('.p1-h4').innerText = '05'
    document.querySelector('.p1-p').innerText = 'HAPPIER THAN EVER'
}

const showAllProducts = document.querySelector('.ph-arrow-left')
showAllProducts.addEventListener('click', resetProducts)

function resetProducts() {
    document.querySelector('.inventory-bg').style.visibility = 'hidden'
    document.querySelector('.figure1-figcaption').innerText = 'hamilton'
    document.querySelector('.p1-h4').innerText = '01'
    document.querySelector('.p1-p').innerText = 'HAMILTON'
    document.querySelector('.p1-h4').style.color = '#9CC6EA'
    document.querySelector('.p1-p').style.color = '#9CC6EA'
    document.querySelector('.figure1-figcaption').classList.remove('adjust-p3')
    document.querySelector('.figure1-figcaption').classList.remove('adjust-p5')
    document.querySelector('.p1').style.visibility = 'initial'
    document.querySelector('.p2').style.visibility = 'initial'
    document.querySelector('.p3').style.visibility = 'initial'
    document.querySelector('.p4').style.visibility = 'initial'
    document.querySelector('.p5').style.visibility = 'initial'
}

//back button label on hover
const backButtonLabel = document.querySelector('.ph-arrow-left')
backButtonLabel.addEventListener('mouseover', showButton)
backButtonLabel.addEventListener('mouseout', hideButton)

function showButton() {
    document.querySelector('.back-button').style.visibility = 'initial'
}

function hideButton() {
    document.querySelector('.back-button').style.visibility = 'hidden'
}

//showing social media labels on hover 

const instagram = document.getElementById('ig-logo')
instagram.addEventListener('mouseover', showIgLabel)
instagram.addEventListener('mouseout', hideIgLabel)

function showIgLabel() {
    document.querySelector('.ig-label').style.visibility = 'initial'
}

function hideIgLabel() {
    document.querySelector('.ig-label').style.visibility = 'hidden'
}

const youtube = document.getElementById('youtube-logo')
youtube.addEventListener('mouseover', showYoutubeLabel)
youtube.addEventListener('mouseout', hideYoutubeLabel)

function showYoutubeLabel() {
    document.querySelector('.youtube-label').style.visibility = 'initial'
}

function hideYoutubeLabel() {
    document.querySelector('.youtube-label').style.visibility = 'hidden'
}

const email = document.getElementById('paper-plane')
email.addEventListener('mouseover', suggestEmail)
email.addEventListener('mouseout', hideEmail)

function suggestEmail() {
    document.querySelector('.email-label').style.visibility = 'initial'
}

function hideEmail() {
    document.querySelector('.email-label').style.visibility = 'hidden'
}
