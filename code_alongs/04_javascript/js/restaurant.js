function runActivity(){
    let items = ["potato", "cooking oil", "eggs", "bacon"];

    function showItems(){
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    }

    function addItem(item){
        items.push(item);
        console.log("Added " + item + " to items list");
    }

    function getItemCount() {
        return items.length;
    }

    addItem("pineapple");
    addItem("milk");
    showItems();
    console.log("Number of items: " + getItemCount());
}