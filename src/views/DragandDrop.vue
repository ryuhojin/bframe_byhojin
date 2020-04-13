<template>
  <div class="d-flex flex-column vw-87 vh-88 align-items-center">
    <div class="d-flex flex-row vw-86 vh-7 bg-white align-items-start">
      <span class="px-2 py-2 font-weight-bold h5">드래그앤드롭 화면</span>
    </div>
    <div
      class="d-flex flex-row vw-86 vh-80 mt-2 bg-white align-items-start justify-content-center"
    >
      <ul class="todo-list">
        <li
          li
          @dragover.prevent
          @drop="dragFinish(-1, $event)"
          v-if="dragging > -1"
          class="trash-drop todo-item"
          :class="{ drag: isDragging }"
        >
          DELETE
        </li>
        <li v-else>
          <input
            placeholder="아무거나 치고 엔터"
            type="text"
            class="new-todo todo-item"
            v-model="newItem"
            @keyup.enter="addItem"
            style="width:85vw !important;"
          />
        </li>
        <li
          class="todo-item"
          v-for="(item, i) in todos"
          :key="i"
          draggable="true"
          @dragstart="dragStart(i, $event)"
          @dragover.prevent
          @dragenter="dragEnter"
          @dragleave="dragLeave"
          @dragend="dragEnd"
          @drop="dragFinish(i, $event)"
        >
          <span
            :class="{ done: item.done }"
            >{{ item.title }}</span
          >
          <span
            class="remove-item"
            @click="removeItem(item)"
            >X</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>

.todo-list {
  list-style-type: none;
  padding: 10px;
  width:85vw;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.new-todo {
  width: 85vw;
}

.trash-drop {
  border: 2px dashed #ccc !important;
  text-align: center;
  color: #e33;
}

.trash-drop:-moz-drag-over {
  border: 2px solid red;
}

.todo-item {
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 14px 8px;
  margin-bottom: 3px;
  background-color: #fff;
  box-shadow: 1px 2px 2px #ccc;
  font-size: 22px;
}

.remove-item {
  float: right;
  color: #a45;
  opacity: 0.5;
}

.todo-item:hover .remove-item {
  opacity: 1;
  font-size: 28px;
}

</style>
<script>
const TODO_STORAGE_KEY = "todostorage";

let todoStorage = {
  fetch: () => JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "[]"),
  save: todos => localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
};

export default {
  name: "DragandDrop",
  data:function(){
      return{
          todos:todoStorage.fetch(),
          newItem:"",
          dragging:-1
      }
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },
  computed: {
    isDragging() {
      return this.dragging > -1
    }
  },
  methods: {
    addItem() {
      if (!this.newItem) {
        return;
      }
      this.todos.push({
        title: this.newItem,
        done: false
      });
      this.newItem = "";
    },
    removeItem(item) {
      this.todos.splice(this.todos.indexOf(item), 1);
    },
    removeItemAt(index) {
      this.todos.splice(index, 1);
    },
    dragStart(which, ev) {
      ev.dataTransfer.setData('Text', this.id);
      ev.dataTransfer.dropEffect = 'move'
      this.dragging = which;
    },
    dragEnter(ev) {
      /* 
      if (ev.clientY > ev.target.height / 2) {
        ev.target.style.marginBottom = '10px'
      } else {
        ev.target.style.marginTop = '10px'
      }
      */
    },
    dragLeave(ev) {
      /* 
      ev.target.style.marginTop = '2px'
      ev.target.style.marginBottom = '2px'
      */
    },
    dragEnd(ev) {
      this.dragging = -1
    },
    dragFinish(to, ev) {
      this.moveItem(this.dragging, to);
      ev.target.style.marginTop = '2px'
      ev.target.style.marginBottom = '2px'
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
      }
    }
  },
};
</script>
