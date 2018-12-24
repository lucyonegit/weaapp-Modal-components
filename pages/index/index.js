//index.js
//获取应用实例
let app = getApp()
Page({
    data: {

    },
    onShow: function() {

    },
    onLoad: function() {

    },
    onReady:function(){
        this.userModal = this.selectComponent("#userModal");
    },
    openDialog: function() {
        this.userModal.open();
    }
})