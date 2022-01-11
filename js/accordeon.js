document.querySelectorAll('.accardeon__triger').forEach(
    (item) => item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains("accardeon__item--active")) {
            parent.classList.remove("accardeon__item--active");
        } else {
            document
                .querySelectorAll('.accardeon__item')
                .forEach((child) => child.classList.remove('accardeon__item--active'))
            parent.classList.add('accardeon__item--active');
        }


    })
)