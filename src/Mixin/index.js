const mixin = {
    created() {
        console.log("Created... Mixin...")
    },
    methods: {
        getUsers() {
            console.log("GetUsers... Mixin...")
        }
    }
}

export default mixin;
