console.log("Phạm Xuân Chiến");
const inputWork = document.getElementById("inputWork");
const btnAdd = document.getElementById("button-submit");
const tableBody = document.querySelector("#table-form tbody");

btnAdd.addEventListener("click", function () {
  const work = inputWork.value.trim();

  if (work === "") {
    alert("Vui lòng nhập công việc!");
    return;
  }
  const row = document.createElement("tr");
  const tdWork = document.createElement("td");
  tdWork.textContent = work;
  const tdActions = document.createElement("td");
  const btnDone = document.createElement("button");
  btnDone.textContent = "Hoàn thành";
  btnDone.style.marginRight = "10px";

  btnDone.addEventListener("click", function () {
    tdWork.style.textDecoration =
      tdWork.style.textDecoration === "line-through" ? "none" : "line-through";
  });
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Xóa";
  btnDelete.addEventListener("click", function () {
    row.remove();
  });
  tdActions.appendChild(btnDone);
  tdActions.appendChild(btnDelete);
  row.appendChild(tdWork);
  row.appendChild(tdActions);
  tableBody.appendChild(row);
  inputWork.value = "";
  inputWork.focus();
});
