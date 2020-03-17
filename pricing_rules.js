var pricingRules = {
    'threeForTwo': function() {
        var total = this.total;
        var count = this._countProduct(item1);
        
        if (count >= 3) {
            total -= (item1.price * parseInt(count / 3));
        }

        this.total = parseFloat(total.toFixed(2));
    },

    'bulkDiscount': function() {
        var total = this.total;
        var count = this._countProduct(item3);

        if (count > 3) {
            total -= item3.price * count;
            total += 39.9 * count;
        }

        this.total = parseFloat(total.toFixed(2));
    },

    'freeBundle': function() {
        var items = this.items;

        var lastItem = items[items.length - 1];

        var freeItem4 = Object.assign({}, item4);
        freeItem4.price = 0;

        if (lastItem.code == item2.code) {
            items.push(freeItem4);
        }

        this.items = items;
    },

    'promoCode': function(code) {
        var total = this.total;

        if (code == promo_code) {
            total *= .9;
        }

        this.total = parseFloat(total.toFixed(2));
    }
}