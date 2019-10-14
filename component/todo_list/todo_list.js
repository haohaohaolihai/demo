// component/todo_list/todo_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todoTask: {
      type: Object,
      value: {
        value: 'haha'
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    todoList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  observers: {
    todoTask: function(data) {
      console.log(13123,data);
      this.setData({
        todoList: this.data.todoList.push(data)
      })
    }
  },
  attached: function() {
    console.log("函数执行")
  }
})
