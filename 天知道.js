let app = new Vue({
    el: "#app",
    data: {
        city: '',
        wetherList: [],
        num:[],
    },
    methods: {
        searchWether: function () {
            // console.log("天气查询");
            // console.log(this.city);
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function (respone) {
                    console.log(respone.data.data.forecast);
                    that.wetherList = respone.data.data.forecast;
                    that.num = that.city;
                    that.city = '';
                })
                .catch(function (err) {
                console.log(err);
                })
        },
        changeWether: function (city) {
            this.city = city;
            this.searchWether();
        }
    }
})