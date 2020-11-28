class Present {
    constructor(item) {
        this.item = item;
    }
}

class Child {
    constructor(name, presents) {
        this.name = name;
        this.presents = []
    }

    addChild(child) {
        if (child instanceof Child) {
            this.childs.push(child);
        } else {
            throw new Error(`You can only add an instance of a child. ${child} is not recognized.`);
    }
    }
    describe() {
        return `${this.name} has ${this.presents.length} presents.`;
        }
}
class Menu {
    constructor() {
        this.childs = []
        this.selectedChild = null
    }

start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
        switch(selection) {
            case "1":
                this.createChild();
                break;
            case "2":
                this.viewChild();
                break;
            case "3":
                this.deleteChild();
                break;
            case "4":
                this.displayChilds();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert ("Goodbye");
}
showMainMenuOptions() {
    return prompt(`
        0) Exit
        1) Create New Child
        2) View Child
        3) Delete Child
        4) Display all Children
    `);
}
showChildMenuOptions(childInfo){
    return prompt(`
        0) Back
        1) Create present
        2) Delete present
        -----------------
        ${childInfo} 
    `);
}
displayChilds() {
    let childString = " ";
    for (let i = 0; i < this.childs.length; i++) {
        childString += i + ") " + this.childs[i].name + '\n';
    }
    alert(childString);
}

createChild() {
    let name = prompt("Enter child's name:");
    this.childs.push(new Child(name));

}

viewChild() {
    let index = prompt("Enter the index number of the child you wish to view:");
    if (index > -1 && index < this.childs.length) {
        this.selectedChild = this.childs[index];
        let description = "Child: " + this.selectedChild.name + '\n';
    
        for (let i = 0; i < this.selectedChild.presents.length; i++) { 
            description += i + ") " + this.selectedChild.presents[i].item
             + '\n';
      
     }
        let selection = this.showChildMenuOptions(description);
        switch(selection) {
            case "1":
                this.createPresent();
                break;
            case "2":
                this.deletePresent();
        } 
    }
}
deleteChild() {
    let index = prompt("Enter the index of the child you wish to delete: ");
    if (index > -1 && index < this.childs.length) {
        this.childs.splice(index, 1);
    }
}

createPresent() {
    let present = prompt("Enter the present: ");
    this.selectedChild.presents.push(new Present(present));
}

deletePresent() {
    let index = prompt("Enter the index of the present you wish to delete: ");
    if (index > -1 && index < this.selectedChild.presents.length) {
        this.selectedChild.presents.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();

