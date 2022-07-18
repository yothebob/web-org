
// <div style="height: 200px;">
// <textarea placeholder="Enter HTML Source Code" id="editing" spellcheck="false" oninput="update(this.value); sync_scroll(this);" onscroll="sync_scroll(this);" onkeydown="check_tab(this, event);"></textarea>

// it looks like the best way is to have a textarea that they type in but it is basicly invisible and they are just updating real fields in real time

const chosenColorScheme = "";
const mappedTextArea = [];

function getColorScheme() {
    // change the color schemes, pre append the class name with the scheme. 
    return null;
}

function setColorSchemeClass(element) {
    element.class = chosenColorScheme
}

function mapElementId(lineIndex,element) {
    return btoa("${lineIndex}.${element.localName}");
}

function createHeader(line,lineIndex) {
    // create a new hX header with proper class
    let headerSize = 0;
    for (let i=0;i<line.length;i++) {
	if (line[i] === "*") {
	    headerSize += 1;
	}
    }
    headerSize = headerSize > 5 ? 5 : headerSize;
    let newHeader = docment.createElement("h{headerSize}");
    newHeader.class = chosenColorScheme;
    newHeader.id = mapElementId(lineIndex,newHeader);
    newHeader.value = line
    return newHeader.id
}

function createTable(line,lineIndex) {
    // check if there is allready a table header, if not make one. else make anoither table row
    let tableTag = false;
    for (var i = mappedTextArea.length; i > 0; i--) {
	if (mappedTextArea[i] != null) {
	    if (atob(mappedTextArea[i]).toLowerCase().includes("table")) {
		tableTag = true;
	    }
	}
	    
    }  //check for table tag
    if (tableTag) {
	// need  to add and map id's for all these elements
	let tableObject = document.getElementById(mappedTextArea[lineIndex])
	let newTableRow = document.createElement("tr");
	newTableObject[0] = newTableRow;
	let splitTableData = line.split("|");
	for (let i=0; i< splitTableData.length;i++) {
	    let newTableData = document.createElement("td");
	    newTableData.value = splitTableData[i];
	    newTableRow[i] = newTableData;
	}
    } else {
	let newTableObject = document.createElement("table");
	newTableObject.id = mapElementId(lineIndex,newTableObject);
	let newTableRow = document.createElement("tr");
	newTableRow.id = mapElementId(lineIndex,newTableRow);
	newTableObject[0] = newTableRow;
	let splitTableData = line.split("|");
	for (let i=0; i< splitTableData.length;i++) {
	    let newTableData = document.createElement("td");
	    newTableData.value = splitTableData[i];
	    newTableData.id = mapElementId(lineIndex, newTableData);
	    newTableRow[i] = newTableData;
	}
    }
}


function update (textArea) {
    const splitter = "\n";
    const splitTextArea = textArea.value.split(splitter);
    for (var i=0;i<splitTextArea.length;i++) {
	//find headers
	if (splitTextArea[i][0] == "*") {
	    if (mappedTextArea[i] == null) {
		mappedTextArea[i] = createHeader(splitTextArea[i],i);
	    }
	}
	if (splitTextArea[i].includes("|") {
	    // in org mode this is executed by the tab button... should I just assume or add a tab command?
	    mappedTextArea[i] = createTable(splitTextArea[i],i);
	}
    }
    
    //find tables
    // find todos/dones
    // find links
    // find source blocks
    // thats enough for now? 
    
}
