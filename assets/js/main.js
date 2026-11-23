function faqAccordions() {
    const accordionsItems = document.querySelectorAll('.faq__item');


    accordionsItems.forEach((item) => {
        const button = item.querySelector('.faq__item-arrow');
        const content = item.querySelector('.faq__info');
        button.addEventListener('click', () => {
            content.classList.toggle('faq__info--active');
        })
    })
}

document.addEventListener('DOMContentLoaded', faqAccordions);