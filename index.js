// async function fetchData() {
//     const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record=await res.json();
//     document.getElementById("date").innerHTML=record.data[0].date;
//     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;

// }

// Function to get the Selected Text
document.getElementById("clickBtn").onclick = function () {
  getSelectedText();
};

function getSelectedText() {
  var selectedText = "";

  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
  } else return;
  // To write the selected text into the textarea
  document.getElementById("textTag").innerHTML = selectedText;
}
// fetchData();
