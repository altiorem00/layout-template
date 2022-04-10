function initSlimSelect(selector) {
    const clearClass = selector.replace(/[\s.,#]/g, '');
    document.querySelectorAll(selector).forEach((item) => {
        const itemParent = item.closest('.js-select-shell'),
            counter = document.createElement('div'),
            arrow = itemParent.querySelector(`${selector}__icon`);
        if (item.multiple) {
            counter.classList.add(`${clearClass}__counter`);
            counter.innerHTML = `Выбрано: <span class="${clearClass}__counter-value"></span>`;
            itemParent.append(counter);
        }
        new SlimSelect({
            select: item,
            showSearch: false,
            closeOnSelect: !item.multiple,
            allowDeselectOption: true,
            placeholder: item.attributes.placeholder.value,
            onChange: (info) => {
                if (item.multiple) {
                    if (info.length > 0) {
                        counter.classList.add('show');
                        itemParent.querySelector(`${selector}__counter-value`).innerHTML = info.length;
                    } else {
                        counter.classList.remove('show');
                    }
                }
            },
        });
        const ssShell = itemParent.querySelector('.ss-main');
        if (arrow) ssShell.append(arrow);
    });
}
// init
document.addEventListener('DOMContentLoaded', initSlimSelect('.f-select'));
