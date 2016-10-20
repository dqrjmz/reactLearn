    /*
                            判断设备平台
                         */


  class Tool {
        constructor() {
                this.isTc = false;
                this.isWx = false;
                this.isQQ = false;
                this.isTouch = false;

                this.platforms();

            }
            // 判断不同平台
        platforms() {
            if (/.*TcTravel.*/i.test(navigator.userAgent)) {
                this.isTc = true;
            } else if (/MicroMessenger/i.test(navigator.userAgent)) {
                this.isWx = true;
            } else if (/qq/i.test(navigator.userAgent.toLowerCase())) {
                this.isQQ = true;
            } else {
                this.isTouch = true;
            }
        }
    };
export default new Tool();