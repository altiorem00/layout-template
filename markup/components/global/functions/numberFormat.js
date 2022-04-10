let formater = new Intl.NumberFormat();
function numberFormat(value) {
    const currentVal = parseInt(value.replace(/\s/g, '').match(/\d+/));
    return currentVal ? formater.format(currentVal) : '';
}
document.addEventListener('DOMContentLoaded', function () {
    this.querySelectorAll('[data-number-format]').forEach((el) => {
        if (el.value) el.value = numberFormat(el.value);
        el.addEventListener('keyup', function (e) {
            if (e.code !== 'Backspace') this.value = numberFormat(this.value);
        });
    });
});
