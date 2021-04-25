// function

let content = "";

function addInputEventToInput() {
  const input = document.getElementById("input");

  input.addEventListener("input", () => {
    // console.log(input.value);

    content = input.value;
  });
}

addInputEventToInput();

function addNewItem(todo) {
  const list = document.getElementById("list");
  const item = list.children[0];
  const itemClone = item.cloneNode(true);
  list.append(itemClone);

  const text = itemClone.getElementsByTagName("span")[0];
  text.innerText = todo;
}

function addClickEventToConfirm() {
  const confirm = document.getElementById("confirm");

  confirm.addEventListener("click", () => {
    if (content === "") return;

    addNewItem(content);

    const input = document.getElementById("input");
    input.value = "";
    content = "";
  });
}

addClickEventToConfirm();
