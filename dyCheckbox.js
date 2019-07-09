var dyCheckbox = {
    template: `
        <div>
            <h1>你喜欢什么样的妹子?</h1>
            <label>
                <input type="checkbox" value="安静的" v-model="currentValue">
                安静的
            </label>
            <label>
                <input type="checkbox" value="美丽的" v-model="currentValue">
                美丽的
            </label>
            <label>
                <input type="checkbox" value="搞怪的" v-model="currentValue">
                搞怪的
            </label>
            <label>
                <input type="checkbox" value="优雅的" v-model="currentValue">
                优雅的
            </label>
            <label>
                <input type="checkbox" value="可爱的" v-model="currentValue">
                可爱的
            </label>
        </div>
    `,
    data () {
        return {
            currentValue:[]
        }
    },
    watch: {
        currentValue(value) {
            this.$emit("give-value",value)
        }
    }
}
var ddCheckbox = {
    props: {
        options: Array,
        value:Array
    },
    template:`
        <div>
            <h1>你喜欢什么样的妹子?</h1>
            <label v-for="(item,index) in options" :key="index">
                <input type="checkbox" :value="item.value" v-model="currentsValue">
                {{item.label}}
            </labe>
        </div>
    `,
    data () {
        return {
            currentsValue:[]
        }
    },
    watch: {
        currentsValue(value) {
            this.$emit("input",value);
        },
        value(val){
            this.currentsValue = val
        }
    },
    created () {
        this.currentsValue = this.value;
    }
}