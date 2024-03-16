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