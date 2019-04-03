
export default class Item {
    constructor(id, task, data, template) {
        this.id = id;
        this.task = task;
        this.data = data;
        this.template = template;
    }

    static fromJson(item_data) {
        if (item_data) {
            let item = new Item(
                item_data.id,
                item_data.task,
                item_data.data,
                item_data.template
            );
            return item;
        }
    }
}
