async function loadWorkItemsFromJson() {
    const response = await fetch('works.json');
    const works = await response.json();
    const workContainer = document.querySelector('[data-js-finished-works]');
    console.log(works);
    createWorkItems(works, workContainer);
}

function createWorkItems(works, container) {
    container.innerHTML = works.map((work, index) => `
             <li class="work-item with-light-background ${index > 4 ? 'is-hidden' : ''}">
                    <a class="wrap" href="${work.url}">
                        <div class="content">
                            <img src="${work.image || './assets/uploads/c.noss_a_lucas_cranach_exibition_with_paintings_which_are_prese_63eaa10b-fca7-461f-9ea0-ac4dac887979.jpg'}" alt="${work.title}">
                            <div>
                                <h3>${work.title}</h3>
                                <ul class="keywords">
                                    <li>${work.author}, ${work.type}, ${new Date(work.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </li>
    `).join('');
}

function toggleWorkItems() {
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((work, index) => {
        if (index > 3) {
            work.classList.toggle('is-hidden');
        }
    });
}

const ausklappButton = document.querySelector('[data-js-ausklapp-button]');

ausklappButton.addEventListener('click', toggleWorkItems);


loadWorkItemsFromJson();