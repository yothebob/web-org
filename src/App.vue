<script setup>
 import HelloWorld from './components/HelloWorld.vue'
 import TheWelcome from './components/TheWelcome.vue'
</script>


<template>
  <header>

      <div class="wrapper">
	  <HelloWorld  msg="Brandon You did it!" />
	  <textarea id="testId" @keypress="orgUpdate" v-model="textArea" name="test" rows="50" cols="50">
	</textarea>
    </div>
    <div style="padding:20px;">
    </div>
    <div class="wrapper">
	<HelloWorld msg="Brandon You did it!" />
	<div id="interpreted-org" style="alignment: top;">
	    
	    
	</div>
    </div>
  </header>

</template>

<style scoped>
 header {
     line-height: 1.5;
 }

 .logo {
     display: block;
     margin: 0 auto 2rem;
 }

 @media (min-width: 1024px) {
     header {
	 display: flex;
	 place-items: center;
	 padding-right: calc(var(--section-gap) / 2);
     }

     .logo {
	 margin: 0 2rem 0 0;
     }

     header .wrapper {
	 display: flex;
	 place-items: flex-start;
	 flex-wrap: wrap;
     }
 }
</style>
<script>
 export default {
     name: "app",
     data() {
	 return {
	     textArea: "",
	     event: null,
	     chosenColorScheme: "",
	     mappedTextArea: []
	 }
     },
     methods: {

	 createHeader: function (line, lineIndex) {
	     let headerSize = 0;
	     for (let i=0;i<line.length;i++) {
		 if (line[i] === "*") {
		     headerSize += 1;
		 }
	     }
	     headerSize = headerSize > 5 ? 5 : headerSize;
	     console.log(headerSize);
	     console.log(`h${headerSize}`);
	     let newHeader = document.createElement(`h${headerSize}`, line);
	     newHeader.class = this.chosenColorScheme;
	     newHeader.id = this.mapElementId(lineIndex,newHeader);
	     newHeader.value = line
	     return newHeader.id
	 },
	 
	 createTable: function (line, lineIndex) {
	     let tableTag = false;
	     for (var i = this.mappedTextArea.length; i > 0; i--) {
		 if (this.mappedTextArea[i] != null) {
		     if (atob(this.mappedTextArea[i]).toLowerCase().includes("table")) {
			 tableTag = true;
		     }
		 }
	     }  
	     if (tableTag) {
		 // need  to add and map id's for all these elements
		 let tableObject = document.getElementById(this.mappedTextArea[lineIndex])
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
		 newTableObject.id = this.mapElementId(lineIndex,newTableObject);
		 let newTableRow = document.createElement("tr");
		 newTableRow.id = this.mapElementId(lineIndex,newTableRow);
		 newTableObject[0] = newTableRow;
		 let splitTableData = line.split("|");
		 for (let i=0; i< splitTableData.length;i++) {
		     let newTableData = document.createElement("td");
		     newTableData.value = splitTableData[i];
		     newTableData.id = this.mapElementId(lineIndex, newTableData);
		     newTableRow[i] = newTableData;
		 }
	     }
	 },
	 
	 mapElementId: function (lineIndex,element) {
	     return btoa(`${lineIndex}.${element.localName}`);
	 },

	 orgUpdate: function () {
	     const splitter = "\n";
	     const splitTextArea = this.textArea.split(splitter);
	     for (var i=0;i<splitTextArea.length;i++) {
		 if (splitTextArea[i][0] == "*") {
		     if (this.mappedTextArea[i] == null) {
			 this.mappedTextArea[i] = this.createHeader(splitTextArea[i],i);
		     }
		 }
		 if (splitTextArea[i].includes("|")) {
		     this.mappedTextArea[i] = this.createTable(splitTextArea[i],i);
		 }
	     }
	 },
     },
 }
</script>
