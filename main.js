Vue.createApp({
    data() {
        return {
            january: [],
            isVisibleRegister: false,
            isVisibleTodo: false,
            todoId: '',
            todo: "",
        };
    },
    computed: {
        the31st: function () {
            if (this.january.length === 0) {
                for (let i = 0; i < 31; i++) {
                    let todo = "";
                    console.log(todo)
                    this.january.push(todo);
                };

            }
        },
    },
    methods: {
        register: function () {
            this.january[this.todoId] = this.todo;
            localStorage.setItem('todo', JSON.stringify(this.january));

        },
        openModal: function () {
            // tentTodoId = event.target.id;
            this.todoId = parseInt(event.target.id);
            if (!this.january[this.todoId]) {
                this.isVisibleRegister = true;
                console.log(this.todoId);
            } else {
                this.isVisibleTodo = true;
            }
        },
        closeModal: function () {
            this.isVisibleRegister = false;
            this.isVisibleTodo = false;

            this.todo = "";
            // this.todoId = "";
        },
        todoDelete: function () {
            this.january[this.todoId] = "";
            // let storageItem = JSON.parse(localStorage.getItem('todo'));
            // storageItem.splice(this.todoId,1);
            localStorage.setItem('todo', JSON.stringify(this.january));
            this.closeModal();
        }
    },
    created: function () {
        const todo = localStorage.getItem('todo');
        if (todo) {
            this.january = JSON.parse(todo);

        }

    }
}).mount('#app')