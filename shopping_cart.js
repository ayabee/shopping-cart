class ShoppingCart {
    static _rules = [];

    constructor() {
        this.items = [];
        this.total = 0;
    }

    add(item, promoCode) {
        this.items.push(item);

        this.total = this._computeTotal();

        for (const rule of ShoppingCart._rules) {
            (promoCode) ? this[rule](promoCode) : this[rule]();
        }

        return item;
    }

    _computeTotal() {
        var total = 0;

        for (const item of this.items) {
            total += parseFloat(item.price);
        }

        return parseFloat(total.toFixed(2));
    }

    _countProduct(product) {
        var count = 0;

        for (const item of this.items) {
            if (item.code == product.code) count++;  
        }

        return count;
    }

    static new(rules) {
        for (const rule in rules) {
            ShoppingCart._rules.push(rule);
            this.prototype[rule] = rules[rule];
        }

        return new ShoppingCart();
    }
}