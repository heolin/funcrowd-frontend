
let uniqueItemIndex = 0;


export default class Item {
    constructor(id, task, data, template) {
        this.id = id;
        this.index = uniqueItemIndex;
        this.task = task;
        this.data = data;
        this.template = template;
        this.templateFields = {};
        template.fields.forEach((field) => {
            this.templateFields[field.name] = field;
        });

        uniqueItemIndex += 1;
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
