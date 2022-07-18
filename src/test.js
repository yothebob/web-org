
// <div style="height: 200px;">
// <textarea placeholder="Enter HTML Source Code" id="editing" spellcheck="false" oninput="update(this.value); sync_scroll(this);" onscroll="sync_scroll(this);" onkeydown="check_tab(this, event);"></textarea>

// it looks like the best way is to have a textarea that they type in but it is basicly invisible and they are just updating real fields in real time

const chosenColorScheme = "";
const mappedTextArea = [];

function getColorScheme() {
    // change the color schemes, pre append the class name with the scheme. 
    return null;
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
    newHeader = docment.createElement("h{headerSize}")
    newHeader.class = chosenColorScheme
    newHeader.id = btoa("${lineIndex}.header");
    newHeader.value = line
    return newHeader.id
}

function createTable(line,lineIndex) {
    // create a new hX header with proper class
    let headerSize = 0;
    for (let i=0;i<line.length;i++) {
	if (line[i] === "*") {
	    headerSize += 1;
	}
    }
    headerSize = headerSize > 5 ? 5 : headerSize;
    newHeader = docment.createElement("h{headerSize}")
    newHeader.class = chosenColorScheme
    newHeader.id = btoa("${lineIndex}.header");
    newHeader.value = line
    return newHeader.id
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
	    mappedTextArea[i] = createHeader(splitTextArea[i],i);
	}
    }
    
    //find tables
    // find todos/dones
    // find links
    // find source blocks
    // thats enough for now? 
    
}
