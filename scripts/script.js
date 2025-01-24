const memberNameEl = document.querySelector('#Team-Member-Name')
const memberPosEl = document.querySelector('#Team-Member-Position')
const memberDesEl = document.querySelector('#Team-Member-Description')
const memberImgEl = document.querySelector('#Team-Member-Portrait')

const updateBio = (activeImg) => {
    // Update Content
    memberImgEl.src = activeImg.src
    memberNameEl.textContent = activeImg.dataset.memberName
    memberPosEl.textContent = activeImg.dataset.memberPosition
    memberDesEl.textContent = activeImg.dataset.memberDescription
}

updateBio(document.querySelector('.active-member'))

const profiles = document.querySelectorAll('.team-member-circle')
profiles.forEach(profile => {
    profile.addEventListener("click", (e) => {
        // Default the previous activeMember
        let activeImg = document.querySelector('.active-member')
        activeImg.classList.remove('active-member')

        // Make the newly clicked class active
        e.target.classList.add('active-member')
        updateBio(e.target)
    })
})
