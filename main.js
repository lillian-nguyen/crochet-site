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