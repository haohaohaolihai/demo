// component/first/first.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    id: 0,
    inputValue: '',
    completed: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addTask: function(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    add: function(e) {
      this.triggerEvent('add-task',{
        id: this.data.id,
        value: this.data.inputValue,
        completed: false
      })
      this.setData({
        id: this.data.id + 1,
        inputValue: ''
      })
    }
  }
})
